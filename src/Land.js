export class Land{
	constructor(){
		// Lead info
		this.name = '\t\t\t**Land Lead**\n';
		this.landNote = '';

        // Main
        this.mainText = '';
        this.construction = [null,''];
        this.building = '';
        this.market = [null,''];
        this.realtor = '';
        
        // important
        this.impotantText = '';
        this.price = [null,''];
        this.reason = [null,''];
        this.time = [null,''];

        // Dimentions & property 
        this.dimentionText = '';
        this.dimention = [null,''];
        this.hoa = null;
        this.road = null;

        // Services
        this.servicesText = '';
        this.services = [null,[]];
	}

    // Main
    setMain(){
        this.mainText = '';
        
        // Construction
        if( (this.construction[0] != null) && (this.building == '') ){
            this.mainText += `${this.construction[1]}`;
        }

        // Building
        if(this.building != ''){
            this.mainText += `${this.construction[1]} ${this.building}.\n`;
        }

        // Market
        if(this.market[0] != null){
            this.mainText += `${this.market[1]} `;
        }

        // Realtor
        if (this.realtor != '') {
            this.mainText += `${this.realtor}`;
        }

        this.display();
    }

    setConstruction(status){
        if(status === 'false'){
            this.construction[0] = false;
            this.construction[1] = 'The property is an empty lot.\n';
        }
        else{
            this.construction[0] = true;
            this.construction[1] = 'The property has something built on it.'
        }
        this.setMain();
    }

    setBuilding(value){
        this.building = value;
        
        this.setMain();
    }

    setMarket(status){
        if (status === 'false') {
            this.market[0] = false;
            this.market[1] = 'The property is not currently on the market.'
        }
        else{
            this.market[0] = true;
            this.market[1] = 'The property is currently **on the market**.'
        }
        this.setMain();
    }

    setRealtor(value){
        if(value === 'true'){
            this.realtor = ' Would sell without the Realtor.\n';
        }
        else{
            this.realtor = " **Wouldn't** sell without the Realtor.\n";
        }

        this.setMain();
    }

    // Important
    setImportant(){
        this.impotantText = '';

        // Price
        if (this.price[0]) {
            //change the text depending on the input.
            if (this.price[1] === "willing to hear offers") {
                this.impotantText += `The customer is ${this.price[1]}.\n`;
            }
            else{
                this.impotantText += `The customer wants ${this.price[1]} for this proeprty.\n`;
            }
        }

        // Reason
        if(this.reason[0]){
            this.impotantText += `About the reason: ${this.reason[1]}. \n`;
        }

        // Time
        if (this.time[0]) {
            //change the text depending on the input.
            if (this.time[1] == "depends on the offer") {
                this.impotantText += `The time frame would ${this.time[1]}.\n`;
            }
            else{
                this.impotantText += `The customer would be able to sell this property in ${this.time[1]}.\n`;
            }         
        }

        this.display();
    }

    setPrice(value){
        if (value != '') {
            // if the entry box is not empty.
            this.price[0] = true;
            this.price[1] = value; 
        }
            // if it's empty turn the [0]value to false.
        else this.price[0] = false;

        this.setImportant();
    }

    setReason(value){
        if (value != '') { 
            this.reason[0] = true;
            this.reason[1] = value; 
        }
        else this.reason[0] = false;

        this.setImportant();
    }

    setTime(value){
        if (value != '') { 
            this.time[0] = true;
            this.time[1] = value; 
        }
        else this.time[0] = false;

        this.setImportant();
    }

    // Dimention & property 
    setLandFeature(){
        this.dimentionText = '';
        
        // Dimentions
        if (this.dimention[0]) {
            this.dimentionText += `Property size: ${this.dimention[1]}.\n`;    
        }

        if (this.road != null){
            this.road ? this.dimentionText += `The property has road access.\n` : this.dimentionText += `The property doesn't has road access.\n`;
        }

        if (this.hoa != null){
            this.hoa ? this.dimentionText += `The property has HOA.\n` : this.dimentionText += `The property doesn't has HOA.\n`;
        }

        this.display();
    }

    setDimention(value){
        if (value != '') { 
            this.dimention[0] = true;
            this.dimention[1] = value; 
        }
        else this.dimention[0] = false;

        this.setLandFeature();
    }

    setRoad(value){
        (value === 'true') ? this.road = true : this.road = false;
        
        this.setLandFeature();
    }

    setHOA(value){
        (value === 'true') ? this.hoa = true : this.hoa = false;
        
        this.setLandFeature();
    }

    // Services
    setServices(){

        this.servicesText = '';

        // fill the text for the note.
        if (this.services[0]) {
            
            if(this.services[1].length > 0){ // Verify the array is not empty.
                
                let items = this.services[1].length; 
                this.servicesText = "The property has";

                for(let i=0; i<items; i++){
                    
                    if(i == 0){ // if there is just one element.
                        this.servicesText += ` ${this.services[1][0]}`;
                    }

                    else if(i != (items-1)){// when it's intermedium an element 
                        this.servicesText += `, ${this.services[1][i]}`;
                    }

                    else{ // when it's the last element 
                        this.servicesText += ` and ${this.services[1][i]}.\n`
                    }
                }
                
                
            }
        } 

        if (!this.services[0]){
            this.servicesText = `The property doesn't have any service.\n`;
        }

        this.display();
    }
    
    // enter point / control the flow to the setServices function by setting a bool
    setService(status){
        (status == 'true') ? this.services[0] = true : this.services[0] = false;

        this.setServices();
    }

    setServiceItem(status, item){ 
        // Add items to the services array.
        // Status is a bool that take the value of the check button (checked or not)
        // item is the value to be apend in the list 
        //console.log('');
        let index = this.services[1].indexOf(item);

        if (status) {
        
            if ( index == -1) {
                this.services[1].push(item);
            }             
        
        } 
        else {
            if (index != -1) {
                this.services[1].splice(index, 1); // 2nd parameter means remove one item only
            }
        }

        this.setServices();
    }

    resetServices(){
        this.services[1] = [];
    }



    reset(){
		this.landNote = '';
        this.mainText = '';
        this.construction = [null,''];
        this.building = '';
        this.market = [null,''];
        this.realtor = '';
        this.impotantText = '';
        this.price = [null,''];
        this.reason = [null,''];
        this.time = [null,'']; 
        this.dimentionText = '';
        this.dimention = [null,''];
        this.hoa = null;
        this.road = null;
        this.servicesText = '';
        this.services = [null,[]];
    }

    display(){
		this.landNote = ''

		this.landNote = '\t'+this.name+'\n'+this.mainText+'\n'+this.impotantText+'\n'+this.dimentionText+'\n'+this.servicesText;
	}
}

// Written by Pablo Vergara 
