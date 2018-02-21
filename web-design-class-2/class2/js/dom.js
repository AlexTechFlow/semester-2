console.log("Hi");

// See class noted on Slate


//returns a node
var targetP = document.getElementById("targetP");
console.log(targetP);

targetP.innerHTML = "Updated via JavaScript";

//returns an element list of nodes (HTML5 only)
var targetLis = document.getElementsByClassName("targetLi"); // elements means targeting many items
console.log(targetLis);
console.log(targetLis[0]); // targeting array elements - individuail li

targetLis[0].innerHTML = "CHANGED!!!"

//returns an element list of nodes
var nodeList = document.getElementsByTagName("li"); 

for(var i=0; i<nodeList.length; i++){
	nodeList[i].innerHTML = "ALL ELEMENTS CHANGED!"
}




//creates a new  element node 
var newElement = document.createElement("li");
//<li></li>

//creates a new  text node
var textNode = document.createTextNode("Brand new textnode"); 

//appends the node to the parent as its last child
newElement.appendChild(textNode); 
//<li>Brand new textnode</li>

//append the new list item to the list on the page
var mainList = document.getElementById("main");

mainList.appendChild(newElement);