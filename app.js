//####################################################
//######    		FUNCTIONS	      ################
//####################################################
// 
// TODO
// 
// 	cuando le doy a que no esta rentada tiene un error raro que no
//  me permite eliminar el estado anterior "the tenants are month to month"
// 
//  INTENTAR ELIMINAR EL LEASE SI SE PRECIONA QUE NO ESTA EN EL MERCADO
// 


function display (){
	// Funtion to estructure and display all information variables into 
	// the input tag named "display".


	document.getElementById('display').value = "";

	itemsToCheck = [agentNote,clientNote,sellerNote,buyerNote,landNote,commercialNote];

	itemsToCheck.forEach(item=>{
		document.getElementById('display').value += item;
	});
}


function checkLead() {
	// This function controls the info displayed in the script section
	// it evals if the radiobuton has ben clicked each time the function has been caled
	// after it, set each info as displayed or hidden.

	seller.checked = document.getElementById('seller').checked;
	buyer.checked = document.getElementById('buyer').checked;
	land.checked = document.getElementById('land').checked;
	commercial.checked = document.getElementById('commercial').checked;
	
	itemsToCheck = [seller,buyer,land,commercial];

	itemsToCheck.forEach(e =>{
		if(e.checked){
			document.getElementById(`${e.name}Section`).style.display = "block";
		}else{
			document.getElementById(`${e.name}Section`).style.display = "none";
		}
	});
}


function getClientData (){
	// function to get the Client data from the imputs
	clientNote = "";
	clientData.name = document.getElementById('clientName').value;
	clientData.phone = document.getElementById('phone').value;
	clientData.address = document.getElementById('address').value;

	Object.keys(clientData).forEach(item=>{
		//evals if the data has any value and save it into "clientNote" var otherwise
		// continue with the loop	
		if(clientData[item] != ""){
			clientNote += `Owner's ${item}: ${clientData[item]}
`;
		}
	});	
	display();
}


function evalYesNo(name,lead){
	// toma un nombre como referencia (puede contener espacios)
	// en caso de tener espacios los convierte en una lista
	// evalua si es un "Yes" o un "No" y devuelve una lista [string,bool]
	
	document.querySelectorAll(`[name=${name}]`).forEach(e=>{
		if(e.checked=== true && e.id.match("Yes")){
			lead.currentStatus = [name,true];
		}
		if(e.checked=== true && e.id.match("No")){
			lead.currentStatus = [name,false];
		}
	}); 
}


function hideShowToggle([target,state]){
	// esconde o muestra un div dado como entrada una lista con un
	// id(target) y un estado de visibilidad state(true=visible,false=escondido)

	if (state){
		document.getElementById(target).style.display = "inline-block";
	}
	else{
		document.getElementById(target).style.display = "none";
	}
}


//####################################################
//######  APP FLOW				      ################
//####################################################


// first for all get the data from local storage 
// and parse it into a object

let agentData = "";
agentData =window.localStorage.getItem("Data");
agentData = JSON.parse(agentData);



// create a paragraph where I set the agent info
// and get it into the display input tag. 
agentNote = `Agent's name: **${agentData.name}**.
"${agentData.nickname}" during the call.

Team ${agentData.team}/**${agentData.portal}**
Credential :${agentData.credential}

`;

// create a paragraph where I set the Client info
// and get it into the display input tag. 
clientNote = "";
sellerNote = "";
buyerNote = "";
landNote = "";
commercialNote = "";
display(); //function to display set the text into the imput

//#####################################################
// create objets with a name attribute for each section into the script side
// after it, i get all elements needed.

seller = {
	name :"seller",
	text : '',
	display:()=>{
		sellerNote = "";
		e = [seller.market.marketText,seller.rented.rentedText];
		e.forEach(function (iteration){
			sellerNote += `
`+iteration;
		});
	display();
	},
	currentStatus : ["",undefined], //[string,bool]
	market : {
		marketText:"", 				//str
		onTheMarket:undefined, 		//bool
		withoutRealtor:undefined, 	//bool
		listIt:undefined, 			//bool
		check: ([target,state])=>{
			// toma el currentState y determina que opcion fue presionada
			// como verdadero o falso
			switch (target){
				case "market":
					if(state){
						seller.market.onTheMarket = true;
						break;
					}else{
						seller.market.onTheMarket = false;
						break;
					}
				case "realtor":
					if(state){
						seller.market.withoutRealtor = true;
						break;
					}else{
						seller.market.withoutRealtor = false;
						break;
					}
				case "listing":
					if(state){
						seller.market.listIt = true;
						break;
					}else{
						seller.market.listIt = true;
						break;
					}
			}
		},
		write : ()=>{
			seller.market.marketText = "";
			items = [seller.market.onTheMarket,
			seller.market.withoutRealtor,
			seller.market.listIt];

			for(var i = 0; i <= items.length - 1; i++) {
				if(items[i]!=undefined){

					if(items[i]){
						//verdadero
						switch (i){
							case 0:
								seller.market.marketText += `The property is for sale on the market.
`;
								break;
							case 1:
								seller.market.marketText += `**The owner would consider sell without the realtor**`;
								break;
							case 2:
								seller.market.marketText += ` and would consider putting on the market with us. `;
								break;
						}
					}else{
						//falso
						switch (i){
							case 0:
								seller.market.marketText += `The property is not for sale on the market.
`;
								break;
							case 1:
								seller.market.marketText += `The owner wouldn't consider sell without the realtor`;
								break;
							case 2:
								seller.market.marketText += ` and wouldn't consider putting on the market with us.`;
								break;
						}
					}
				}
			}
			seller.display();
		}
	},
	rented : {
		rentedText:"", 	  //str
		rented:undefined, //bool
		lease:undefined,  //bool
		check: ([target,state])=>{
			// toma el currentState y determina que opcion fue presionada
			// como verdadero o falso
			switch (target){
				case "rented":
					if(state){
						seller.rented.rented = true;
						break;
					}else{
						seller.rented.rented = false;
						break;
					}
			}
		},
		write : ()=>{
			console.log("entra en write ...")
			seller.rented.rentedText = "";
			items = [seller.rented.rented,seller.rented.lease];
				 //  [true/false, "texto"]
			for(var i = 0; i <= items.length - 1; i++) {
				 
				if(items[i]!= undefined ){

					if(items[i] || items[i] != ""){
						//verdadero

						switch (i){
							case 0:
								seller.rented.rentedText = `
The property is currently rented.
`;
								break;
							case 1:
								seller.rented.rentedText += ` ${seller.rented.lease}`;
								break;
						}
					}
					else{
						seller.rented.rentedText="";
						console.log("entra en el bucle del no: ",items[i]);
						switch (i){
							case 0:
								seller.rented.rentedText = `
The property not is currently rented.
`;
								break;
							case 1:
								seller.rented.rentedText += ` `;
								break;
						}
					}
				}
			}
			seller.display();
		}
	},
	main : {
		mainText:"", //str
		reason:"", 	 //str
		time:"",     //str
		price:""     //str
	},
	status : {
		beds:undefined,  //numb
		baths:undefined, //numb
		sqft: undefined, //numb
		acres: undefined //numb
	},
	confirm : {
		secondCall:undefined, //bool
		address:"",			  //str
		phone:"",			  //str
		name:""				  //str
	}
}


buyer = {name:"buyer"};

land = {name:"land"};

commercial = {name:"commercial"};

clientData = {
	name:"",
	phone:"",
	address:""
};

sellerSection = document.getElementById('sellerSection');
buyerSection = document.getElementById('buyerSection');
landSection = document.getElementById('landSection');
commercialSection = document.getElementById('commercialSection');


//focus on owner's name
document.getElementById("clientName").focus();

document.getElementById("sellerform").addEventListener("submit",e=>{e.preventDefault()});

//get all elements with attribute "name" with value equal to "kind-of-lead" and adding event handler. 
document.querySelectorAll('[name="kind-of-lead"]').forEach(e=>{
	e.addEventListener("click",checkLead);
});

//get all elements with the class name "clientDataInput" and adding event handler.
document.querySelectorAll('.clientDataInput').forEach(e=>{
	e.addEventListener("change",getClientData);
});


//market
document.querySelectorAll('[name="market"]').forEach(e=>{e.addEventListener("click",()=>{
	evalYesNo("market",seller);
	seller.market.check(seller.currentStatus);
	hideShowToggle(seller.currentStatus);
	seller.market.write();

})});

document.querySelectorAll('[name="realtor"]').forEach(e=>{e.addEventListener("click",()=>{
	evalYesNo("realtor",seller);
	seller.market.check(seller.currentStatus);
	seller.market.write();

})});

document.querySelectorAll('[name="rented"]').forEach(e=>{e.addEventListener("click",()=>{
	evalYesNo("rented",seller);
	seller.rented.check(seller.currentStatus); // ["rented",true/false]
	hideShowToggle(seller.currentStatus);
	seller.rented.write();
})});

document.getElementById("rentedImput").addEventListener("focusout",()=>{
	seller.rented.lease = document.getElementById("rentedImput").value;
	seller.rented.write();
});
