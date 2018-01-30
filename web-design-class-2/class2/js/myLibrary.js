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


//Create JavaScript function that:
// accepts a library object and 
// returns an array of books
// Outside of that function, create another function that:
// accepts an array of books and
// console.logs the titles of those books		

function getBooks(libraryObject){ // name function in reference to what it does
	//parameter is a generic libray object because we may have many different libraries
	// the function will find what you need with this syntax - any array of books
	return libraryObject.books;
}; 

exercise1(libraryObject) {
  return myLibrary.books;
};	

function exercise2();

exercise2(){


}