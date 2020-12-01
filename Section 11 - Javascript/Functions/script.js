var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];


var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function isUserValid(username, password){
	for(var i=0; i<database.length; i++){
		if (username===database[i].username && password===database[i].password){
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)){
			console.log(newsFeed);
	}else{
		alert("wrong credentials");
	}
}

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

signIn(userNamePrompt, passwordPrompt);

