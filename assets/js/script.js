// how do I connect this to my index as I didn't use their same code?  Starting code used ".top-banner form", not "#.user-form"

const form = document.querySelector("#user-form");
const input = document.querySelector("#city");

// connect to API
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
  const apiKey = "7f1282b41e2802ede9b0c2a45ab85720";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${apiKey}&units=metric`;
  console.log(url);
  
  fetch(url).then(response => response.json()).then(data => {
      // do stuff w/ data
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]
}@2x.png`;

    // build list item component
    const li = document.createElement("li");
        li.classList.add("city");
    const markup = `
      <h2 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
      </div>
      <figure>
        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
        <figcaption>${weather[0]["description"]}</figcaption>
      </figure>
    `;
    li.innerHTML = markup;
    list.appendChild(li);   
      })
      // to do later //
          .catch(() => {
            msg.textContext = "Please search for a valid city";
      });
    });

// connect to API





// add local storage  AFTER API!!!!
//$(".btn").on("click", function() {
//   var saveKey = $(this).parent().attr("id");
//   var saveValue = $(this).siblings(".description").val();
//   // saves items to storage
//   localStorage.setItem(saveKey, saveValue);
// });
// // pull row info from localStorage and displays it in the description
// $("#row-9 .description").val(localStorage.getItem("row-9"));
// $("#row-10 .description").val(localStorage.getItem("row-10"));
// $("#row-11 .description").val(localStorage.getItem("row-11"));
// $("#row-12 .description").val(localStorage.getItem("row-12"));
// $("#row-13 .description").val(localStorage.getItem("row-13"));
// $("#row-14 .description").val(localStorage.getItem("row-14"));
// $("#row-15 .description").val(localStorage.getItem("row-15"));
// $("#row-16 .description").val(localStorage.getItem("row-16"));
// $("#row-17 .description").val(localStorage.getItem("row-17"));



// // clear content of .msg element
// msg.textContent = "";
// form.reset();
// input.focus();

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

