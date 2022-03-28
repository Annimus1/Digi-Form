currentBrouser = ()=> {
	let userAgent = navigator.userAgent;
         
    if(userAgent.match(/chrome|chromium/i)){
    	console.log("Chrome");
    }else {
    	Swal.fire({
		  icon: 'info',
		  title: 'Please, keep this in mind:',
		  text: 'In order to the best behavior of this app, please use Google Chrome browser.'
		})
    }         
}


function sendData(){

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

	window.location.href="../src/App.html";
}


try{

	currentBrouser();

	document.getElementById('name').focus();

	document.getElementById('submit').addEventListener('click',()=>{
		sendData();
	});
}

catch (e) {
	Swal.fire({
	  icon: 'error',
	  title: 'Ups...',
	  text: 'Something went wrong.'
	})
}

