const loremGenerateor = document.getElementById("loremGenerateor");
const loremGenerateorNumber = document.getElementById("loremGenerateorNumber");
const loremText = document.getElementById("lorem");
const error = document.getElementById("error");
const copyLoremIpsum = document.getElementById("copyLoremIpsum");
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat rem praesentium ipsam vel dicta perferendis architecto sapiente, magnam asperiores unde nemo dolorum quo molestias nam alias consequuntur vero reiciendis dolores consequatur quas obcaecati quos. Nulla porro dolore, blanditiis nostrum alias accusantium explicabo? Aspernatur quis doloremque quibusdam. Vitae, accusantium quo."

loremGenerateor.addEventListener("click", function () {
    const isNumber = loremGenerateorNumber.value;
    if (!isNumber) {
        error = "Sorry, Please give a input value minimum at least 1 number";
        return;
    }
    else {
        debugger
        console.log(isNumber);
        for (i = 0; i < isNumber; i++) {
            let re =  loremText.textContent
            re = text.repeat(10)

        }
    }
});

copyLoremIpsum.addEventListener("click", function () {
    const text = document.getElementById("lorem").textContent.trim();
    navigator.clipboard.writeText(text);
        copyLoremIpsum.textContent = "Coped!"
    setTimeout(() => {
        copyLoremIpsum.textContent = "Copy"
    }, 2000);
});