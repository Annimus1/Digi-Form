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

// main
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
	})
	clientData.reset();
	sellerData.reset();
	display();
})

//back
document.getElementById("back").addEventListener("click",()=>{
	window.location.href="../index.html";
});


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
	display();
}

function display(){     // [+]
	// console.log()
	var note = "";

	var date = Date();
	var date2 = date.split(" ");
	date = `${date2[0]} ${date2[2]}  ${date2[4]}\n`;

	var items = [agentNote,date,clientData.clientInfo,sellerData.sellerNote];

	items.forEach(item => {
		if(item != "" && item != undefined){
			note += item+"\n";
		}
	})

	display_tag.value = note;
}

//[+] To comment.
