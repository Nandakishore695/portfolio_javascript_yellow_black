const generateOtp = document.querySelector("#generateOtp");
const optResult = document.querySelector("#optResult");
const otpCopy = document.querySelector("#otpCopy");

let optNumber;
generateOtp.addEventListener("click", function (event) {
    event.preventDefault();
    optNumber = Math.trunc((Math.random() * 9000) + 1000);
    optResult.value = optNumber;
});

otpCopy.addEventListener("click", function (event) {
    event.preventDefault();
    navigator.clipboard.writeText(optNumber);
otpCopy.textContent = "Copyed!"
    setTimeout(()=>{
otpCopy.textContent = "Copy"
    },1500)

});