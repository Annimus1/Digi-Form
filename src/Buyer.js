export class Buyer{
	constructor(){
		// Lead info
		this.name = "\t\t\t**Buyer Lead**\n";
		this.buyerNote = "";

		// main info
		this.mainText = "";
		this.kindOfProperty = ["",false];
		this.location = ["",false];
		this.basics = [0,0,false];

		// secondary info
		this.secondayText="";
		this.special = ["",false]; 			// Something special the client wants in the property
		this.budget=["",false];				// Amount of money the client has to the downpayment or
											// to buy the whole property.
		this.amountOfProperties=[0,false];

		//contact info
		this.contactText="";
		this.email="";
		this.best_number = undefined;
		this.phone = "";
	}


	setContactInfo(){
		this.contactText="";

		if(this.best_number){
			this.contactText+="This is the best number to reach them back."
		}
		
		if(!this.best_number && this.phone != ""){
			this.contactText += `The best phone number to reach them back is **${this.phone}**`
		}

		if(this.email != ""){
			this.contactText += `\nThe best email address to contact them is: **${this.email}**`;
		}

		this.display()
	}
	setEmail(value){
		this.email = value;
		this.setContactInfo();	
	}

	setPhone(value){
		if(value === 'true'){
			this.best_number = true;
		}else{
			this.best_number = false;
		}
		this.setContactInfo();
	}

	setPhoneNumber(value){
		this.phone = value;
		this.setContactInfo()
	}

	setAttribMain(){
		this.mainText = "";

		if(this.kindOfProperty[1] && this.kindOfProperty[0]!=""){
			this.mainText+= "The customer would like to buy a "+this.kindOfProperty[0];
		}

		if(this.location[1] && this.location[0]!=""){
			this.mainText += " in "+this.location[0]+".\n";
		}

		if(this.basics[2]){
			if(this.basics[0] != 0){
				if(this.basics[0]>1){
					this.mainText += `The property should has ${this.basics[0]} bedrooms`;
				}
				else{ this.mainText += `The property should has ${this.basics[0]} bedroom`;}
			}
			if(this.basics[1] != 0){
				if(this.basics[1]>1){
					this.mainText += ` and ${this.basics[1]} bathrooms.\n`;
				}
				else{this.mainText += ` and ${this.basics[1]} bathroom.\n`;}
			}
		}

		this.display();
	}
	
	setKindOf(value){
		this.kindOfProperty[1] = true;
		this.kindOfProperty[0] = value;

		this.setAttribMain()
	}

	setLocation(location){
		this.location[1] = true;
		this.location[0] = location;

		this.setAttribMain()
	}

	setBasics(description,value){
		this.basics[2] = true;
		
		if(description == "beds"){
			this.basics[0] = value;
		}
		else if(description == "baths"){
			this.basics[1] = value;	
		}

		this.setAttribMain()
	}

	setAditionalInfo(){
		this.secondayText = "";

		if (this.special[1]){
			if(this.special[0] != ""){
				this.secondayText += `The customer would like the property to have ${this.special[0]}.\n`
			}
		}
		if (this.budget[1]){
			if(this.budget[0] != ""){ // implementar si la cantidad de propiedades es diferente de 1 
				this.secondayText += `The customer is willing to spend ${this.budget[0]} in this property.\n`
			}
		}
		if (this.amountOfProperties[1]){
			if(this.amountOfProperties[0] != 0){
				if (this.amountOfProperties[0] == 1) {
					this.secondayText += `The customer is looking to buy around ${this.amountOfProperties[0]} property this year.\n`
				} else {
					this.secondayText += `The customer is looking to buy around ${this.amountOfProperties[0]} properties this year.\n`
				}
			}
		}

		this.display();
	}

	setSpecial(value){
		console.log("Special",value);
		this.special[1] = true;
		this.special[0] = value;

		this.setAditionalInfo();
	}

	setBudget(value){
		this.budget[1] = true;
		this.budget[0] = value;

		this.setAditionalInfo();
	}

	setAmount(value){
		this.amountOfProperties[1] = true;
		this.amountOfProperties[0] = value;

		this.setAditionalInfo();
	}


	reset(){
		this.buyerNote=""; 
		this.mainText="";
		this.secondayText="";
		this.contactText = "";

		this.kindOfProperty= ["",false];
		this.location = ["",false];
		this.basics = [0,0,false];
	}

	display(){
		this.buyerNote = ""
		this.buyerNote = "\t"+this.name+this.mainText+
		this.secondayText+this.contactText;
	}
}