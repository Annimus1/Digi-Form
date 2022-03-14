export class ClientInfo{
	// this class handle each aspect related to the client info and how to show it.

	constructor(){
		this.name = "";				
		this.phone = "";			
		this.address = "";			
		this.numberOfAttribs = 3;	// this var controls the for loop,
									// can be modified depending on the number of attributes you need.
		this.clientInfo = "";		// save all the text to display.
	}

	setAttrib(attrib,value){ // set a value to a given attribute. 

		for(var i = 1; i <= this.numberOfAttribs ; i++){
			if (attrib == "name"){
				this.name = value;
			}
			else if(attrib == "phone"){
				this.phone = value;
			}
			else{
				this.address = value;
			}
		}
	}

	setInfo(){ // Controls the order and the value of "clientInfo" variable.

		this.clientInfo = "";

		if (this.name != ""){
			this.clientInfo += `Client's name: ${this.name}\n`;
		}
		if(this.phone != ""){
			this.clientInfo += `Phone number: ${this.phone}\n`
		}
		if(this.address != ""){
			this.clientInfo += `Address: ${this.address}\n\n`;
		}
	}

}