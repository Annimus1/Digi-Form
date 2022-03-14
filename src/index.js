import { ClientInfo } from './ClientInfo.js';
import { Seller } from './Seller.js';


// creating class instances
let clientData = new ClientInfo(); 
let sellerData = new Seller();

let display_tag = document.getElementById("display"); //getting display tag


let agentData = "";
agentData =window.localStorage.getItem("Data"); // getting the info from localStorage.
agentData = JSON.parse(agentData); // parsing the info into an object.
 
// create a paragraph where the agent's info is setted
let agentNote = `Agent's name: **${agentData.name}**.\n"`
+`${agentData.nickname}" during the call.\n\n**${ agentData.team}/**${agentData.portal}*`
+`*\nCredential: ${agentData.credential}`;

display();

//focus on the first input
document.getElementById("name").focus();

//adding events to the client section (imputs) 
document.querySelectorAll('.clientDataInput').forEach(htmlElement => {
	htmlElement.addEventListener('focusout', e =>{
		clientData.setAttrib(htmlElement.id,htmlElement.value);
		clientData.setInfo();
		display();
	})
});


// adding events to handle the click event on kind of leads pickers 
document.querySelectorAll('[name="kind-of-lead"]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",kindOfLead);
});

//
document.querySelectorAll('[name=market]').forEach(radiobuton =>{
	radiobuton.addEventListener("click",()=>{
		sellerData.setAttribMarket("market",radiobuton.value,3);
	})});

document.getElementById('selectOption').addEventListener('change',()=>{
	sellerData.setAttribMarket("market","true",3);
})

//####################FUNCTIONS#############################

function kindOfLead(){  // [+]
	
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
}

function display(){     // [+]
	// console.log()
	var note = "";
	var items = [agentNote,clientData.clientInfo]

	items.forEach(item => {
		if(item != ""){
			note += item+"\n\n";
		}
	})

	display_tag.value = note;
}

//[+] To comment.