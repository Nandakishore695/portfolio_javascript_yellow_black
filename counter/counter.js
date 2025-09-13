const myInput = document.getElementById("wordCount")

// event Button id
const upperCaseButton = document.getElementById("upperCaseButton");
const lowerCaseButton = document.getElementById("lowerCaseButton");
const captilizeButton = document.getElementById("captilizeButton");
const clearButton = document.getElementById("clearButton");
const copyButton = document.getElementById("copyButton");

//Number id 
const charactorsNumber = document.getElementById("charactorsNumber");
const wordNumber = document.getElementById("wordNumber");
const paragraphsNumber = document.getElementById("paragraphsNumber");

// myInput.focus();
let inputValueUser = "";

myInput.addEventListener("keyup", function (event) {
  inputValueUser = event.target.value;
  charactorsNumber.innerText = inputValueUser.length;
  //word count  
  WordUpdate();
});

function WordUpdate() {
  let wordValueUser = inputValueUser.split(" ");
  wordNumber.innerText = wordValueUser.length;
}

upperCaseButton.addEventListener("click", function () {

  inputValueUser = inputValueUser.toUpperCase();
  myInput.value = inputValueUser;
});

lowerCaseButton.addEventListener("click", function () {
  inputValueUser = inputValueUser.toLowerCase();
  myInput.value = inputValueUser;
});

captilizeButton.addEventListener("click", function () {
  let maaap = inputValueUser.split(" ");
  const aaa = maaap.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  myInput.value = aaa;
});

clearButton.addEventListener("click", function () {
  inputValueUser = "";
  myInput.value = inputValueUser;
});

copyButton.addEventListener("click", function () {
  if (!inputValueUser) {
    alert("Event your words");
    myInput.focus();
  } else {
    navigator.clipboard.writeText(inputValueUser);
  }
});

