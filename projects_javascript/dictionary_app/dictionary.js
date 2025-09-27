const wordSearch = document.querySelector("#wordSearch");
const wordSearchInput = document.querySelector("#wordSearchInput");
const result = document.querySelector("#result");
let isInput = null;


wordSearch.addEventListener("submit", function (event) {
    event.preventDefault();
    debugger
    isInput = wordSearchInput.value.toLowerCase().trim();
    if (!isInput) {
        result.style.color = "red";
        result.textContent = "sorry, Enter any word for meaning"
    }
    else {
        dictionaryapi();
    }
})

async function dictionaryapi() {
    const respone = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${isInput}`);
    const reRespone = await respone.json()
    console.log(reRespone);
    result.style.color = "black";
    result.innerHTML = `<div >
                <h2>Word: ${reRespone[0].word}</h2>
                <p>${reRespone[0].meanings[0].partOfSpeech}</p>
                <p><strong>Meaning:</strong> ${reRespone[0].meanings[0].definitions[0].definition}</p>
                <p><strong>Example:</strong> ${reRespone[0].meanings[0].definitions[0].example || reRespone[0].meanings[1].definitions[0].example}</p>
                <a href="${reRespone[0].sourceUrls[1]}">Read More</a>
            </div>`
}