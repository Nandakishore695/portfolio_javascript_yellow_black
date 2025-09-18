const todoTitle = document.getElementById("todoTitle");
const todoDate = document.getElementById("todoDate");
const todoDescription = document.getElementById("todoDescription");
const todoCreate = document.getElementById("todoCreate");

let todoArrayList = [];

todoCreate.addEventListener("click", function () {
    const levelWork = document.querySelector('input[name="levelWork"]:checked');
    if (levelWork) {
        console.log("Selected value:", levelWork.value);
    } else {
        console.log("No option selected");
    }

    let object = {
        "id": "1",
        "titleIs": todoTitle.value,
        "dateIs": todoDate.value,
        "priority": levelWork.value,
        "descriptonIs": todoDescription.value,
    }
    todoArrayList.push(object);

    const todoHtml = todoArrayList.map(item => (
        `
    <div class="feature col-3 mt-0 p-1" style="height: 2702x;">
        <div class="border border-black rounded-3 p-2" >
            <h2 class="fs-2 text-body-emphasis">${item.titleIs}</h2>
            ${item.dateIs}
            <p>${item.descriptonIs}</p> 
            <p>Priority:- ${item.priority === "extreme" ? '<span style="color: red">Extreme</span>' : item.priority === "moderate" ? '<span style="color: blue">Moderate</span>' : item.priority === "low" ? '<span style="color: green">Low</span>' : ""}</p>
            <a href="#" class="icon-link"
                data-bs-toggle="modal" data-bs-target="#todoListModal">
                View
                <svg class="bi" aria-hidden="true">
                    <use xlink:href="#chevron-right"></use>
                </svg> </a>
        </div>
    </div>`
    ));
    // const todoHtml = 
    document.getElementById("output").innerHTML = todoHtml
});