
let credentials= [];
let imputs;
credentials.push(window.localStorage.getItem("_name"));
credentials.push(window.localStorage.getItem("_team"));
credentials.push(window.localStorage.getItem("_credential"));


document.getElementById("_name").innerHTML="Agent name: "+credentials[0];
document.getElementById("_team").innerHTML=" "+credentials[1]+"/"+credentials[2]+"\n";

function view(id) {
	document.getElementById(id).style="inline-block";
	console.log("viewed "+id)
}

function hide(id) {
	document.getElementById(id).style="display: none";
	console.log("hided "+id)
}

document.getElementById("clear").onclick = function(){
	window.location.reload();
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