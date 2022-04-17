export class Seller {

	constructor (){
	
		this.identify ="Seller";				// Kind of lead identification.
		this.sellerNote = "";					// final text to show
		
		//Market
		this.marketText = ""; 				
		this.onTheMarket = undefined; 		
		this.withoutRealtor = undefined; 	
		this.listIt = undefined; 			
		this.textMarket = ""				

		//Rented
		this.rentedText=""; 				
		this.rented=undefined;  				
		this.lease=undefined;
		this.status = undefined;

		//main
		this.mainText = "";
		this.time="";
		this.reason="";
		this.price="";

		//basics
		this.basicsText="";
		this.beds=0;
		this.baths=0;
		this.dimention=0;
		this.updates="";
		this.metric="";

		//Confirm
		this.confirmText = "";
		this.secondCall = undefined;   				
			
	}

	setAttribMarket(attrib,value,numberOfAttribs){

		this.marketText = "";

		for(var i = 1; i <= numberOfAttribs ; i++){

			if (attrib == "market"){
				
				this.onTheMarket = (value === 'true');
				
				if(this.onTheMarket){
					document.getElementById('marketOption').style.display = "block";
					document.getElementById('market').style.display = "inline-block";
				}
				else{
					document.getElementById('marketOption').style.display = "none";
					document.getElementById('market').style.display = "none";
					this.withoutRealtor = undefined;
				}
			}

			if (attrib == "realtor"){
				this.withoutRealtor = (value === 'true');
			}
			
			if (attrib == "listing"){
				this.listIt = (value === 'true');
			}
		}

		if(this.onTheMarket != undefined){
			var marketinfo = document.getElementById('selectOption');
			if(this.onTheMarket){
				this.marketText += `The property is currently ${marketinfo.value}`;
			}
			else{
				this.marketText += `The property is not on the market.`;	
			}			
		}
		
		if (this.withoutRealtor != undefined){
			if(this.withoutRealtor){
				this.marketText += ` Would consider selling without the Realtor.\n`;
			}
			else{
				this.marketText += ` **Wouldn't** consider selling without the Realtor.\n`;
			}
		}

		if (this.listIt != undefined){
			if(this.listIt){
				this.marketText += `Would consider listing the property for sale on the market with us.`;
			}
			else{
				this.marketText += `Wouldn't consider listing the property for sale on the market with us.`;
			}

		}


		this.displayNote();
	}

	setAttribRented(attrib,value,numberOfAttribs){
		this.rentedText = "";

		for (var i = 1; i<=numberOfAttribs; i++) {
			
			if(attrib === "rented"){
				this.rented = (value === "true")

				if(this.rented){
					document.querySelector("#rented").style.display = "block";
					document.querySelector("#noRented").style.display = "none";
					this.status = false;
				}else{
					document.querySelector("#rented").style.display = "none";
					document.querySelector("#noRented").style.display = "block";
					this.lease = false;
				}
			}
			
			if(attrib === "lease" && this.rented){
				this.lease = true;
			}

			if(attrib === "status" && !this.rented){
				this.status = true;
				console.log("entró");
			}
			
		}

		if(this.rented){
			this.rentedText += `The property is currently rented. `;
		}

		if(!this.rented){
			this.rentedText += `The property is not rented. `
		}
		if(this.status){
			this.rentedText += `${value} `
		}

		if(this.lease){
			this.rentedText += `${value} \n`;
		}

		this.displayNote();
	}

	setAttribMain(attrib,value){
		
		this.mainText = "";

		if(attrib === "price"){
			this.price = value;
		}
		if(attrib === "reason"){
			this.reason = value;
		}
		if(attrib === "time"){
			this.time = value;
		}
		
		if(this.price != ""){
			this.mainText += `About the price: **${this.price}**.\n`;
		}

		if(this.time != ""){
			this.mainText += `About the time-frame: **${this.time}**.\n`;
		}

		if(this.reason){
			this.mainText += `About the reason: **${this.reason}**.\n`;
		}
		
		this.displayNote()
	}

	setAttribBasics(attrib,value){
		this.basicsText = "The property has ";

		if(attrib=="beds"){
			this.beds = value;
		}
		if(attrib=="baths"){
			this.baths = value;
		}
		if(attrib=="dimention"){
			this.dimention = value;
			this.metric = document.getElementById("metric").value;
		}

		if(attrib=="updates"){
			this.updates = value;
		}

		if(this.beds != 0 && this.beds != undefined && this.beds > 0){
			if(this.beds == 1){
				this.basicsText += `${this.beds} bedroom`;
			}
			else{
				this.basicsText += `${this.beds} bedrooms`;
			}
		}
		if(this.baths != 0 && this.baths != undefined && this.baths > 0){
			if(this.baths == 1){
				this.basicsText += `, ${this.baths} bathroom`;
			}
			else{
				this.basicsText += `, ${this.baths} bathrooms`;
			}
		}
		if(this.dimention != 0 && this.dimention != undefined){
			this.basicsText += ` and ${this.dimention} ${this.metric}`;
		}

		if(this.updates != "" && this.updates != undefined){
			this.basicsText += `.\nAbout the updates: ${this.updates}.\n`;
		}

		this.displayNote()
	}

	setAttribConfirm(attrib,value){
		this.confirmText = "";

		if(attrib=="call"){
			this.secondCall = (value == 'true');
		}

		if(this.secondCall != undefined){
			if(this.secondCall){
				this.confirmText = "Agreed with the second call."
			}
			else{
				this.confirmText = "**didn't agree with the second call.**"
			}
		}

		this.displayNote();
	}


	reset(){


		this.sellerNote="";
		//Market
		this.marketText = ""; 				
		this.onTheMarket = undefined; 		
		this.withoutRealtor = undefined; 	
		this.listIt = undefined; 			
		this.textMarket = ""				

		//Rented
		this.rentedText=""; 				
		this.rented=undefined;  				
		this.lease=undefined;
		this.status = undefined;

		//main
		this.mainText = "";
		this.time="";
		this.reason="";
		this.price="";

		//basics
		this.basicsText="";
		this.beds=0;
		this.baths=0;
		this.dimention=0;
		this.updates="";
		this.metric="";

		//Confirm
		this.confirmText = "";
		this.secondCall = undefined;
		document.getElementById('marketOption').style.display = "none";
		document.getElementById('market').style.display = "none";
		document.querySelector("#noRented").style.display = "none";
		document.querySelector("#rented").style.display = "none";
	}

	displayNote(){
		this.sellerNote = "";

		var items = [this.marketText,this.rentedText,this.mainText,this.basicsText,this.confirmText];

		items.forEach( text => {
			if(text != ""){
				this.sellerNote += text+"\n";
			}
		});
	}

}

