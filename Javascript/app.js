
let credentials= [];
let imputs;
credentials.push(window.localStorage.getItem("_name"));
credentials.push(window.localStorage.getItem("_team"));
credentials.push(window.localStorage.getItem("_credential"));


document.getElementById("_name").innerHTML="Agent name: "+credentials[0];
document.getElementById("_team").innerHTML=" "+credentials[1]+" / "+credentials[2]+"\n";


document.getElementById("note").addEventListener("mouseenter", function( event ) {
	document.getElementById("_date").innerHTML="Hora: "+new Date().getHours()+":"+new Date().getMinutes();
})

function view(id) {
	document.getElementById(id).style="inline-block";
	console.log("viewed "+id)
}


function hide(id) {
	document.getElementById(id).style="display: none";
	console.log("hided "+id)
}


function main_page(){
	window.location = "../index.html";
}


function change_detected(argument) {
	
	switch (argument) {
		
		case 'client_name':
			document.getElementById("_"+argument).innerHTML= "Owner's Name: "+document.getElementById(argument).value;
			break

		case 'phone':
			document.getElementById("_"+argument).innerHTML= "Phone Number: "+document.getElementById(argument).value;
			break

		case 'address':
			document.getElementById("_"+argument).innerHTML= "Address: "+document.getElementById(argument).value;
			break

		case 'kind-of-lease-input':
			document.getElementById("_"+argument).innerHTML= document.getElementById(argument).value;
			break

		case 'time-frame-input':
			document.getElementById("_"+argument).innerHTML= "About the time: "+document.getElementById(argument).value;
			break

		case 'reason-input':
			document.getElementById("_"+argument).innerHTML= "About the reason: "+document.getElementById(argument).value;
			break

		case 'beds':
			document.getElementById("_"+argument).innerHTML= "The property has: "+document.getElementById(argument).value+" beds";
			break

		case 'baths':
			document.getElementById("_"+argument).innerHTML= document.getElementById(argument).value+" baths";
			break

		case 'sqft':
			document.getElementById("_"+argument).innerHTML= "and "+document.getElementById(argument).value+" sqft";
			break

		case 'updates-input':
			document.getElementById("_"+argument).innerHTML= "Updates or improvements: "+document.getElementById(argument).value;
			break

		case 'price-input':
			document.getElementById("_"+argument).innerHTML= "The owner wants "+document.getElementById(argument).value;
			break

		case '':
			document.getElementById("_"+argument).innerHTML= "Address: "+document.getElementById(argument).value;
			break

		case 'a-notes':
			document.getElementById("_"+argument).innerHTML= "Note: "+document.getElementById(argument).value;
			break

	}
}


function checks_change(argument){
	
	switch (argument) {

		case 'market':
			if (document.getElementById("yes-market").checked) {
				document.getElementById("_market").innerHTML= "The property is on the market.";
				document.getElementById("_realtor").style= "display: block";
				break;
			} 

			if (document.getElementById("no-market").checked) {
				document.getElementById("_market").innerHTML= "The property is NOT on the market.";
				document.getElementById("_realtor").style= "display: none";
				break;	
			}

		case 'realtor':
			if (document.getElementById("yes-without-realtor").checked) {
				document.getElementById("_realtor").innerHTML= "Would consider sell without the realtor.";
				break;
			} 

			if (document.getElementById("no-without-realtor").checked) {
				document.getElementById("_realtor").innerHTML= "WOULDN'T consider sell without the realtor.";
				break;	
			}

		case 'lease':
			if (document.getElementById("yes-rented").checked) {
				document.getElementById("_lease").innerHTML= "The property is currently rented.";
				document.getElementById("_kind-of-lease-input").style="display: block";
				break;
			} 

			if (document.getElementById("no-rented").checked) {
				document.getElementById("_lease").innerHTML= "The property NOT currently rented.";
				document.getElementById("_kind-of-lease-input").style="display: none";
				break;	
			}


		case 'listing':
			if (document.getElementById("yes-listing").checked) {
				document.getElementById("_listing").innerHTML= "Would consider putting the property for sales on the market with us.";
				break;
			} 

			if (document.getElementById("no-listing").checked) {
				document.getElementById("_listing").innerHTML= "WOULDN'T consider putting the property for sales on the market with us.";
				break;	
			}


		case 'second-call':
			if (document.getElementById("yes-second-call").checked) {
				document.getElementById("_second-call").innerHTML= "Agreed with the second call.";
				break;
			} 

			if (document.getElementById("no-second-call").checked) {
				document.getElementById("_second-call").innerHTML= "The second call was NOT agreed with.";
				break;	
			}


		case 'confirmed':
			if (document.getElementById("option").checked) {
				view(argument);
				break;
			} 
			else{
				hide(argument);
				break;
			}

			
			

	}
}



function confirmed(argument) {
	switch (argument) {

		case 'all':

			if (document.getElementById("all-c").checked){
				document.getElementById('address-c').checked=true;
				document.getElementById('name-c').checked=true;
				document.getElementById('phone-c').checked=true;

				document.getElementById("_confirmed").innerHTML= "All information confirmed.";
				break;

			}

			else{
				document.getElementById('address-c').checked=false;
				document.getElementById('name-c').checked=false;
				document.getElementById('phone-c').checked=false;
				document.getElementById("_confirmed").innerHTML= "";
				break;
			}

		case 'one':

			let aux = [document.getElementById('address-c').checked,document.getElementById('name-c').checked,document.getElementById('phone-c').checked];
			console.log(aux);
			
			let aux2="";

			if (aux[0]){
				aux2 += "Addess"
			}

			if (aux[1]){
				if (aux2=="") {
					aux2="Name "
				}
				else{
					aux2+= ", Name"
				}
			}

			if (aux[2]){
				if (aux2=="") {
					aux2="Phone "
				}
				else{
					aux2+= " & Phone"
				}
			}

			if (aux[0]&&aux[1]&&aux[2]){
				document.getElementById("_confirmed").innerHTML="All information confirmed.";
				break;
			}

			document.getElementById("_confirmed").innerHTML= aux2+" confirmed.";
			break;
	}
}
