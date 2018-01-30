var myLibrary = {
			name:"Oakville Public Library",
			services:["Borrowing", "Internet", "Meeting Rooms", "Comunity"],
			address:{
                        street:"120 Navy St.",
                        town:"Oakville",
                        province:"Ontario",
                        postalCode:"L6J 2Z4"
              		},
			books:[
					{
						"pages":"198", 
						"author":"Neil Young", 
						"title":"Waging Heavy Peace"
					},
    				{
						"pages":"1", 
						"author":"Matthew Inman", 
						"title":"How to Tell If Your Cat Is Plotting to Kill You"
					},
					{
						"pages":"234", 
						"author":"Tyler Hamilton", 
						"title":"The Secret Race"
					}
				],
			};




/// EXERCISE IN-CLASS //
// 1.
//Create JavaScript function that:
// accepts a library object and 
// returns an array of books

// 2.
// Outside of that function, create another function that:
// accepts an array of books and
// console.logs the titles of those books		




//1.
function getBooks(libraryObject){ // name function in reference to what it does
	//parameter is a generic libray object because we may have many different libraries
	// the function will find what you need with this syntax - any array of books
	return libraryObject.books;
}; 

var receivedBooks = getBooks(myLibrary);
console.log(receivedBooks);



// 2.
function logTitles(bookArray){ // arrays and for loops go hand in hand
	for(i=0; i<bookArray.length; i++){
		console.log(i);
		console.log(bookArray[i].title);

	}

}

logTitles(receivedBooks);




// NAMING OF FUNCTIONS AND VARS = WHAT THEY DO
// NAMING IS IMPORTANT

// This is a reusable function because it is not tied to any specific library. You want to use the same function for different sets of data
// ABSTRACT DATA FROM FUNCTIONALITY



// Examples: input processing and output
// function teach(courseName){
// 	prepareStuff();
// 	teachStuff();
// 	gradeStuff();
// 	return grades;
// }
// var gradesToDean = teach("IMM");


