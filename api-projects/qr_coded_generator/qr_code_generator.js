 const textInput = document.getElementById("qr_code_generator");
 const resultDiv = document.getElementById("result");

 document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const useInput = textInput.value.trim();
    if(useInput === "") {
        alert("Please enter a valid text or URL");
        return;
    }
    else{
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${useInput}`;
        resultDiv.innerHTML = `<img src="${qrCodeUrl}" alt=${useInput}>`;
    }
 })
        