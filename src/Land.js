export class Land{
	constructor(){
		// Lead info
		this.name = '\t\t\t**Land Lead**\n';
		this.landNote = '';

        // Main
        this.mainText = '';
        this.construction = [null,''];
        this.market = [null,''];

        // important
        this.price = [false,''];
        this.reason = [false,''];
        this.time = [false,''];
        // Dimentions
        // Services
	}

    setMain(){
        this.mainText = '';
        
        // Construction
        if(this.construction[0] != null){
            this.mainText += `${this.construction[1]}.\n`;
        }

        // Market
        if(this.market[0] != null){
            this.mainText += `${this.market[1]}.\n`;
        }

        this.display();
    }

    setConstruction(status){
        if(status === 'false'){
            this.construction[0] = false;
            this.construction[1] = 'The property is an empty lot'
        }
        else{
            this.construction[0] = true;
            this.construction[1] = 'The property has something built on it'
        }
        this.setMain();
    }

    setMarket(status){
        if (status === 'false') {
            this.market[0] = false;
            this.market[1] = 'The property is not currently on the market'
        }
        else{
            this.market[0] = true;
            this.market[1] = 'The property is currently **on the market**'
        }
        this.setMain();
    }

    display(){
		this.landNote = ''
		this.landNote = '\t'+this.name+'\n'+this.mainText;
	}
}

// Written by Pablo Vergara 
