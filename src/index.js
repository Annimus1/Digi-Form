import { ClientInfo } from './ClientInfo.js';
import { Seller } from './Seller.js';
import { Buyer  } from './Buyer.js';
import { Land   } from './Land.js';


// creating class instances
const clientData = new ClientInfo(); 
const sellerData = new Seller();
const buyerData = new Buyer();
const landData = new Land();

let display_tag = document.getElementById("display"); //getting display tag

let agentData = "";
agentData =window.localStorage.getItem("Data"); // getting the info from localStorage.
agentData = JSON.parse(agentData); // parsing the info into an object.
 
// create a paragraph where the agent's info is setted
let agentNote = `Agent's name: **${agentData.name}**.\n"`
+`${agentData.nickname}" during the call.\n**${ agentData.team}**/**${agentData.portal}*`
+`*\nCredential: ${agentData.credential}\n`;

display();

Swal.fire({
  title: '<strong>Please be aware of:</strong>',
  icon: 'info',
  position: 'top',
  html:
    `<ul>
    <li>This page has been made to help agents in their notes to follow a standard.<br/>You can use this page while you're speaking with the customer (ideal usage) or to parse your notes after finish the call.</li>
    <li>You can edit your note by clicking over the right-side section.</li>
    <li>Please <b>just edit your note when you filled all the fields</b>, otherwise the note would be overwritten by itself.</li>
    </ul>`,
  showCloseButton: true,
})

//####################SELLER LEAD#############################


//focus on the first input
document.getElementById("name").focus();

//adding events to the client section (imputs) 
document.querySelectorAll('.clientDataInput').forEach(htmlElement => {
	htmlElement.addEventListener('change', e =>{
		clientData.setAttrib(htmlElement.id,htmlElement.value);
		clientData.setInfo();
		display();
	})
});

// adding events to handle the click event on kind of leads pickers 
document.querySelectorAll('[name="kind-of-lead"]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",kindOfLead);
});

// market
document.querySelectorAll('[name=market]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",()=>{
		sellerData.setAttribMarket("market",radiobuton.value,3);
		display();
})});

//
document.getElementById('selectOption').addEventListener('change',()=>{
	sellerData.setAttribMarket("market","true",1);
	display();
})

// market
document.querySelectorAll('[name=realtor]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",()=>{
		sellerData.setAttribMarket("realtor",radiobuton.value,3);
		display();
	})});

// rented
document.querySelectorAll('[name=rented]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",()=>{
		sellerData.setAttribRented("rented",radiobuton.value,2);
		display();
	})});

// rented
document.querySelector("#lease").addEventListener("change",()=>{
	sellerData.setAttribRented("lease",document.querySelector("#lease").value,1);
	display();
});

//rented
document.querySelector("#noRentedInput").addEventListener("change",()=>{
	sellerData.setAttribRented("status",document.querySelector("#noRentedInput").value,1);
	display();
});

//time
document.querySelector("#time").addEventListener("change",()=>{
	sellerData.setAttribMain("time",document.querySelector("#time").value);
	display();
})

//reason
document.querySelector("#reason").addEventListener("change",()=>{
	sellerData.setAttribMain("reason",document.querySelector("#reason").value);
	display();
})

//price
document.querySelector("#price").addEventListener("change",()=>{
	sellerData.setAttribMain("price",document.querySelector("#price").value);
	display();
})

//basics
document.querySelectorAll('[name="basics"]').forEach( item =>{
	item.addEventListener('change',()=>{
		sellerData.setAttribBasics(item.id,item.value);
		display();
	});
});

document.querySelector("#metric").addEventListener("change",()=>{
	
	sellerData.setAttribBasics("dimention",document.querySelector("#dimention").value);
	display();
})

//listing
document.querySelectorAll('[name=listing]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",()=>{
		sellerData.setAttribMarket("listing",radiobuton.value,1);
		display();
	})});

//Confirm
document.querySelectorAll('[name=call]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",()=>{
		sellerData.setAttribConfirm("call",radiobuton.value);
		display();
	})});

//####################BUYER LEAD#############################

//  KIND OF PROPERTY
document.getElementById('property').addEventListener("change",e=>{
	buyerData.setKindOf(document.getElementById('property').value);
	display();
});

// LOCATION
document.getElementById('location').addEventListener("change",e=>{
	buyerData.setLocation(document.getElementById('location').value);
	display();
});

// BASICS
document.querySelectorAll('[name="buyer_basics"]').forEach( item =>{
	item.addEventListener('change',()=>{
		buyerData.setBasics(item.id,item.value);
		display();
	});
});

// SOMETHING SPECIAL IN THE PROPERTY
document.getElementById("special").addEventListener("change",()=>{
	buyerData.setSpecial(document.getElementById("special").value);
	display();
})

//BUDGET
document.getElementById("budget").addEventListener("change",()=>{
	//console.log("Done");
	buyerData.setBudget(document.getElementById("budget").value);
	display();
})

//AMOUNT OF PROPERTIES
document.getElementById("amountOfProperties").addEventListener("change",()=>{
	//console.log("Done");
	buyerData.setAmount(document.getElementById("amountOfProperties").value);
	display();
})

// CONTACT INFO
// 		PHONE
document.querySelectorAll('[name="buyer_pone_selector"]').forEach( item =>{
	item.addEventListener('click',(e)=>{
		if(item.value === "true"){
			document.getElementById('buyer_phone').style.display="none";
			buyerData.setPhone(item.value);
			display();
		}else{
			document.getElementById('buyer_phone').style.display="inline-block";
			buyerData.setPhone(item.value);
			display();
		}
	});
});

// 		PHONE INPUT
document.getElementById("buyer_phone").addEventListener("change",()=>{
	buyerData.setPhoneNumber(document.getElementById("buyer_phone").value);
	display();
})

// 		EMAIL
document.getElementById("buyer_email").addEventListener("change",(e)=>{
	buyerData.setEmail(document.getElementById("buyer_email").value);
	display();
});

//####################LAND LEAD#############################

// Construction
document.querySelectorAll('[name="lotConstruction"]').forEach( element =>{
	element.addEventListener('click', e => {
		landData.setConstruction(element.value);
		// controlling the building description view.
		(element.value == 'true') ? document.getElementById('building').style.display = 'block' : document.getElementById('building').style.display = 'None'; 

		display();
	});
	
});

// Construction Description
document.getElementById('buildingDescription').addEventListener('change', ()=>{
	landData.setBuilding(document.getElementById('buildingDescription').value);
	display();
});

// Market
document.querySelectorAll('[name="lotMarket"]').forEach( element => {
	element.addEventListener( 'click',()=>{
		landData.setMarket(element.value);
		(element.value == 'true') ? document.getElementById('landRealtor').style.display = 'block' : document.getElementById('landRealtor').style.display = 'None';
		display();
	});
});

// With a Realtor
document.querySelectorAll('[name="landRealtor"]').forEach( element => {
	element.addEventListener( 'click',()=>{
		landData.setRealtor(element.value);
		display();
	});
});

// Reason
document.getElementById('landReason').addEventListener('change', (element)=>{
	landData.setReason(document.getElementById('landReason').value);
	display();
});

// Price
document.getElementById('landPrice').addEventListener('change', ()=>{
	landData.setPrice(document.getElementById('landPrice').value);
	display();
});

// Time
document.getElementById('landTime').addEventListener('change', ()=>{
	landData.setTime(document.getElementById('landTime').value);
	display();
});

// Dimentions
document.getElementById('lotDimention').addEventListener('change', ()=>{
	landData.setDimention(document.getElementById('lotDimention').value);
	display();
});

// Road Access
document.querySelectorAll('[name="landRoad"]').forEach( element => {
	element.addEventListener('click', ()=>{
		landData.setRoad(element.value);
		display();
	});
});

// HOA
document.querySelectorAll('[name="landHOA"]').forEach( element => {
	element.addEventListener('click', ()=>{
		landData.setHOA(element.value);
		display();
	});
});

// Services 
document.querySelectorAll('[name="landServices"]').forEach( element => {
	element.addEventListener('click', () => {
		landData.setService(element.value);
		
		if (element.value == 'true') {// if the user hit yes show up the hidden div (services list)
			document.getElementById('landServicesList').style.display = 'block';
		}
		else{ // if the user hit "No" hide the div (services list)
			document.getElementById('landServicesList').style.display = 'none';
			landData.resetServices();
			// cleanning all the checkbuttons
			document.querySelectorAll('[name="landServicesItem"]').forEach(service =>{
				service.checked=false;
			});
		}

		display();
	});
});

// Services Items
document.querySelectorAll('[name="landServicesItem"]').forEach( element => {
	element.addEventListener( 'change', () => {
		landData.setServiceItem(element.checked,element.value);
		display();
	});
});


//####################BUTTONS#############################

// copy
document.getElementById("btnCopy").addEventListener("click",()=>{
	try{

		let text = document.querySelector("#display");
		
		text.select();
		document.execCommand("copy");

		Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Copied to clipboard successfully',
		  showConfirmButton: false,
		  timer: 1500
		})
	}
	catch (e) {
		Swal.fire({
		  position: 'top-end',
		  icon: 'error',
		  title: 'Something went wrong :c ',
		  showConfirmButton: false,
		  timer: 2000
		})

	}
})

// refresh
document.getElementById("reset").addEventListener("click",()=>{
	document.querySelectorAll("form").forEach(form =>{
		form.reset();
	});

	document.querySelectorAll('.landServicesItem').forEach(service =>{
		service.reset();
	});

	// hide Services List
	document.getElementById('landServicesList').style.display = 'none';

	clientData.reset();
	sellerData.reset();
	buyerData.reset();
	landData.reset();

	// clicking the imput...
	document.getElementById("seller").click()
	
	display();
})

//back
document.getElementById("back").addEventListener("click",()=>{
	window.location.href="../index.html";
});

//####################FUNCTIONS#############################

function kindOfLead(){	
	// This function controls the info displayed in the script section
	// it evals if the radiobuton has ben clicked each time the function has been caled
	// after it, set each info as displayed or hidden.

	var seller = document.getElementById('seller');
	var buyer = document.getElementById('buyer');
	var land = document.getElementById('land');
	var commercial = document.getElementById('commercial');
	
	var itemsToCheck = [seller,buyer,land,commercial];

	itemsToCheck.forEach(e =>{
		if(e.checked){
			document.getElementById(`${e.id}Section`).style.display = "block";
		}
		else{
			document.getElementById(`${e.id}Section`).style.display = "none";
		}
	});
	display();
}

function display(){     
	// console.log(``);
	var note = "";

	var date = Date();
	var date2 = date.split(" ");
	date = `${date2[0]} ${date2[2]}  ${date2[4]}\n`;

	var items = [agentNote,date,clientData.clientInfo,sellerData.sellerNote,buyerData.buyerNote,landData.landNote];

	items.forEach(item => {
		if(item != "" && item != undefined){
			note += item+"\n";
		}
	})

	display_tag.value = note;
}

// toggle Requirements panel 
document.getElementById('requirement-btn').addEventListener('click',()=>{
	document.getElementById('requirements').classList.toggle("displayed");
	document.getElementById('requirements').classList.toggle("hidden");
});

