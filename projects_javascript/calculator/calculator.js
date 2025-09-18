const calculation = document.getElementById("calculation");
let oneBtn = document.getElementById("oneBtn");
const twoBtn = document.getElementById("twoBtn").value;
const threeBtn = document.getElementById("threeBtn");
const foruBtn = document.getElementById("foruBtn");
const fiveBtn = document.getElementById("fiveBtn");
const sixBtn = document.getElementById("sixBtn");
const sevenBtn = document.getElementById("sevenBtn");
const eightBtn = document.getElementById("eightBtn");
const nineBtn = document.getElementById("nineBtn");


document.getElementById("calculationScreen").textContent = oneBtn;
    console.log(oneBtn);
    console.log(twoBtn);

    const expression = 2+3
calculation.addEventListener("submit", function(event){
    event.defaultPrevented();
    debugger
    // const oneBtn = oneBtn.value;
    // const twoBtn = twoBtn.value;
    // console.log(oneBtn , twoBtn);
    const output = eval(expression); 
    console.log(output);
    
    

});