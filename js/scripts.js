function validate(userInput) {
  // userInput is the message that is entered in the text field
  // use window.alert("Message") to output errors
  // return true when no error occurs
  // return false if an error occurs
  if(userInput === "" || !userInput || !userInput.replace(/\s/g, '').length) {
    window.alert ("User input field is empty.");
    return false;
  } else if(userInput.length > 20) {
    window.alert ("User input field is longer than 20 characters.");
    return false;
  } else if(userInput === "Bobby") {
    window.alert ("User input field is equal to 'Bobby'.");
    return false;
  } else {
    return true;
  }
}


// -------------------------------------------------------------------------------
// DON'T CHANGE ANYTHING BELOW THIS LINE!
// -------------------------------------------------------------------------------
var value = null;
document.getElementById("emailInput").onchange = function(event) {
  value = event.srcElement.value;
}

document.getElementById("form").onsubmit = function() {
  validate(value);
}
function checkNumber(value) {
  // Value is a number between 0 and 99
  // Return true if the number should be displayed, else return false
  if (value === 0 || value > 90 || (value >= 10 && value < 20) || (value > 42 && value < 43) || (value > 60 && value < 80)) {
    return true;
  }
  return false;
}

// ---------------------------------------------------------
// DONT CHANGE ANYTHING BELOW THIS LINE!
// ---------------------------------------------------------

function addToOutput(text) {
  var output = document.getElementById("output");
  output.innerHTML = output.innerHTML += "<br>" + text;
}

document.getElementById("start").onclick = function() {
  for(var i = 0; i < 100; i++) {
    if(checkNumber(i)) {
      addToOutput(i);
    }
  }
}
function startButtonClicked() {
  // Use the provided textOutput method to output any text to the HTML page
  // e.g.: textOutput("Hello World!")
  // Use it output the numbers 100-200
  for(i = 0; i <= 100; i++) {  // or for(i = 100; i <= 200; i++) {
  	textOutput(i +100);  // textOutput(i);
  }
}

// ---------------------------------------------------------
// DONT CHANGE ANYTHING BELOW THIS LINE!
// ---------------------------------------------------------

function textOutput(text) {
  var output = document.getElementById("output");
  output.innerHTML = output.innerHTML += "<br>" + text; // better use: output.innerHTML += "<br>" + text;
}

document.getElementById("start").onclick = function() {
  startButtonClicked();
}