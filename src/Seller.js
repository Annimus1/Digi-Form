export class Seller {

	constructor (){
	
		this.identify ="Seller";				// Kind of lead identification.
		this.sellerNote = "";					// final text to show 
		this.currentStatus = ["",false]; 		// control the flow externally [*1]
		
		//Market
		this.marketText = ""; 				
		this.onTheMarket = undefined; 		
		this.withoutRealtor = undefined; 	
		this.listIt = undefined; 			
		this.textMarket = ""				

		//Rented
		this.rentedText=""; 				
		this.rented=false;  				
		this.lease=false;   				
			
		
	}

	setAttribMarket(attrib,value,numberOfAttribs){

		this.marketText = "";

		for(var i = 1; i <= numberOfAttribs ; i++){

			if (attrib == "market"){
				
				this.onTheMarket = (value === 'true');
				
				if(this.onTheMarket){
					document.getElementById('marketOption').style.display = "block";
				}
				else{
					document.getElementById('marketOption').style.display = "none";
				}
			}
			if (attrib == "realtor"){
				this.withoutRealtor = (value === 'true');
			}
			if (attrib == "list"){
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

		console.log(this.marketText);
	}

}
//[*1] no estoy seguro de si lo usaré.
