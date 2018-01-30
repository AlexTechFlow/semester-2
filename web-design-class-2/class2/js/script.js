console.log("I am connected");

var o = {}; // make a new object

o = { // this is JavaScript object notation

	"firstName":"Wasim", // for JSON, you ned to have strings encased in double quotes: https://jsonformatter.curiousconcept.com/ if you want to use/transfer this file as JSON; FOR js this is not required
	"lastName":"Singh", 
	"age":30,
	"wight":300,
	"likePizza":true,
	"gamesPlayed": ["Starcraft", "CS:GO"], // array inside object
	"address":{ // property that is an object
		"street":"12 Fake Street",
		"city":"Springfield",
		"postalCode":"L9K0L9"
	}

};

// VALIDATE YOUR JSON AS SOON AS YOU HAVE ACCESS TO IT TO MAKE DEBUGGING EASIER


// objects are descriptive, arrays are not

var lionJo = {
	length:20,
	wight:300,
	fierceFactor:"VERY FIERCE" // all thes are object properties 
};

var lionPjil;
var lionDanZen;

var pride = [lionJo, lionPjil, lionDanZen];

// USE ARRAYS FOR SETS OF THINGS
// USE OBJECTS TO DESCRIBE THINGS


// objects - use dot syntax to target elements of objects
// array - use arrays syntax to target elements of arrays


console.log(o);
console.log(o.firstName);
console.log(o.gamesPlayed);
console.log(o.gamesPlayed[1]);
console.log(o.address);
console.log(o.address.postalCode);

//set values
o.address.postalCode = "Y6Y6Y6";
o.gamesPlayed.push("Animal Crossing"); // push this to the gamesPlayed

// Figure out how things are structured, how to read info.

// JSON - JavaScript object notation