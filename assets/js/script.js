// JS is client side script
// Start w/ Variables; variable format is--> var variable name = variable assignment notation to get HTML element
// document refers to the HTML document that the javascript is linked to
// .getElementByID is a built in JavaScript fxn on the document model to find an HTML element w/ the ID that matches
//  https://www.w3schools.com/js/js_htmldom_document.asp


/* Examples of variables to start with, b/c they will be referenced further in the document
// Global variables that can be accessed w/in any other function or variable
var htmlElementByID = document.getElementById('ID')

var htmlElementClass = document.getElementsByClassName('Class-Name')  

var htmlElementClass;  <-- this is null as nothing was applied to it
*/





//initialization of event handlers for named functions
/* document.getElementById('ID').addEventListener('event-type', eventHandlerFunction);

function init() {
    document.getElementById('ID').addEventListener('event-type', eventHandlerFunction);
    ... (probably more of these)
}

*/


// named functions
/* function utilityFxn(){

}
*/


// events
/* named functions for eventHandlers 
function eventHandler(){
    /* method or function body
    if / else statements
    function logic
}
*/

// end with execute init
/* 
init();
*/


// JSON fetch (API) data example
    // fetch(approrpriate repo).then(function(object-chosen)
        //fetch("https://api.github.com/users/octocat/repos").then(function(response) {
   
    // object-chosen.method().then(function() 
        // here the response object in the fetch logic has a json() method
        //response.json().then(function(data) {
        
        //check console.log to see data
            //console.log(data);

    //close fetch API logic
    // });
    // });

