console.log("I am connected");

var o = {}; // make a new object

o = {

	firstName:"Wasim",
	lastName:"Singh", 
	age:30,
	wight:300,
	likePizza:true,
	gamesPlayed: ["Starcraft", "CS:GO"], // array inside object
	address:{ // property that is an object
		street:"12 Fake Street",
		city:"Springfield",
		postalCode:"L9K0L9"
	}

}

// objects are descriptive, arrays are not

var lionJo = {
	length:20,
	wight:300,
	fierceFactor:"VERY FIERCE" // all thes are object properties 
};

var pride = [lionJo];

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