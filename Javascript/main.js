console.log("content loaded successfully") 

function Send_Data(){

	name = document.getElementById('name').value;	console.log(name)	
	team = document.getElementById('team').value;	console.log(team)
	credential = document.getElementById('credential').value;	console.log(credential)

	localStorage.setItem('_name',name);
	localStorage.setItem('_team',team);
	localStorage.setItem('_credential',credential);

	window.location.href="Source/dashboard.html";
}





