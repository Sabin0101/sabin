function log()
{	
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="sabin" && password=="sabin"){
		alert("successfully loged in ");
		return false;
	}
	else{
		alert("wrong usernane or password");
	}
}