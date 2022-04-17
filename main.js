currentBrouser = ()=> { //check which browser the user have.
	let userAgent = navigator.userAgent;
         
    if(userAgent.match(/chrome|chromium/i)){
    	console.log("Chrome");
    }else { // if is not Chrome, show a warning 
    	Swal.fire({
		  icon: 'info',
		  title: 'Please, keep this in mind:',
		  text: 'In order to the best behavior of this app, please use Google Chrome browser.'
		})
    }         
}


function sendData(){ // take all input values and save it into local storage.

	info = [
		document.getElementById('name').value,
		document.getElementById('nickname').value,
		document.getElementById('team').value,
		document.getElementById('portal').value,
		document.getElementById('credential').value
	]	

	var object = {
		name : info[0],
		nickname : info[1], 
		team : info[2],
		portal : info[3],
		credential : info[4]
	};
	
	var data = JSON.stringify(object); 

	localStorage.setItem('Data', data);

	window.location.href="src/App.html"; //change the src to the page foward
}


// Start Point:

try{
	currentBrouser();

	document.getElementById('name').focus();

	document.getElementById('submit').addEventListener('click',(event)=>{
		event.preventDefault(); 
		try{
			document.querySelectorAll("input")
			.forEach(input =>{
				//Check each input
				if(input.value==""){
					/*
					if the input is empty remove the class "is-valid" 
					and also add the class "is-invalid"
					*/
					input.classList.remove("is-valid");
					input.classList.add("is-invalid");
					throw "You must fill all fields.";
				}
				else{
					input.classList.remove("is-invalid");
					input.classList.add("is-valid");
				}
			});
			// Finaly excecute "sendData" function
			sendData();

		}
		catch (err){
			Swal.fire({
			  icon: 'error',
			  title: 'Hey :/',
			  text: `${err}`
			});
		}				
	});
}

catch (e) {
	Swal.fire({
	  icon: 'error',
	  title: 'Ups...',
	  text: ':c Something went wrong.'
	})
}

