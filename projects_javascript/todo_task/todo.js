const todoTitle = document.getElementById("todoTitle");
const todoDate = document.getElementById("todoDate");
const todoDescription = document.getElementById("todoDescription");
const todoCreate = document.getElementById("todoCreate");

todoCreate.addEventListener("click", function () {
    const titleIs = todoTitle.value
    const dateIs = todoDate.value
    const descriptonIs = todoDescription.value
    const todoHtml = `
    <div class="feature col-3 mt-0 p-1 ">
        <div class="border border-black rounded-3 p-2">
            <h2 class="fs-2 text-body-emphasis">${titleIs}</h2>
            ${dateIs}
            <p>${descriptonIs}</p> <a href="#" class="icon-link"
                data-bs-toggle="modal" data-bs-target="#todoListModal">
                View
                <svg class="bi" aria-hidden="true">
                    <use xlink:href="#chevron-right"></use>
                </svg> </a>
        </div>
    </div>`
    document.getElementById("output").innerHTML = todoHtml
});