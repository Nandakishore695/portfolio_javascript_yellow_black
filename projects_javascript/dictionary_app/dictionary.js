const wordSearch = document.querySelector("#wordSearch");
const wordSearchInput = document.querySelector("#wordSearchInput");
const result = document.querySelector("#result");
let isInput = null;
wordSearchInput.focus()

wordSearch.addEventListener("submit", function (event) {
    event.preventDefault();
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
    try {
        const respone = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${isInput}`);
        if (!respone.ok) {
            throw new Error(`HTTP error! status: ${respone.status}`);
        }
        else {
            const reRespone = await respone.json()
            result.style.color = "black";
            result.innerHTML = `<p>Loading....</p>`
            setTimeout(() => {
                result.innerHTML = `<div >
                <h2>Word: ${reRespone[0].word}</h2>
                <p>${reRespone[0].meanings[0].partOfSpeech}</p>
                <p><strong>Meaning:</strong> ${reRespone[0].meanings[0].definitions[0].definition}</p>
                <p><strong>Example:</strong> ${reRespone[0].meanings[0].definitions[0].example || reRespone[0].meanings[1].definitions[0].example}</p>
                <a href="${reRespone[0].sourceUrls[0]}" target="_blank" >Read More</a>
            </div>`
            }, 1200)

        }
    }
    catch (error) {
        result.textContent = error.message;
    }
}