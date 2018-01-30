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



//returns the first node that matches the selector
var node = document.querySelector(selectors);

//Returns a list of nodes that match the specified group of selectors
var nodeList = document.querySelectorAll(li); // this can be ANY VALID CSS SELECTOR -- very convenient