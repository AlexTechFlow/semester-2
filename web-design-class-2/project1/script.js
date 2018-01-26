var names = ["Joe", "Fraser", "Ali", "Lisa", "UT"];
var grades = [50, 75, 12];
var mahBools = [true, false];

function printNames(list){ // namesList is just a variable to use inside the function
	var limit = list.length; // DYNAMIC CODE example

	for (var i=0; i<limit; i++){
	console.log(list[i] + " FROM FUNCTION");
    }
}

printNames(names);
printNames(grades);
printNames(mahBools);


function add(a,b){ // this function need these parameters to work
	var sum = a + b;
	return sum; // need somebody to catch that return
}

var myCalculation = add(4,5); // this var catches the return-ed value from the function
console.log(myCalculation);

// or 

console.log(add(3,7));


// CLASS NOTES:

// for loop for repeating things over and over again
// i<10; this line is for controling the loop

// In HTML, common array elements could be list items, divs

// A function is an independent piece of code. We sometimes need to send information to it. We do it by passing it parameters function(parameters){};
// So function is like a DVD player. You need to insert a disc or it won't play anything.
//But the function won't do anything unless you actually USE IT.