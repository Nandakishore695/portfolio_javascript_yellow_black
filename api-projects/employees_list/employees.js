const employeeForm = document.querySelector("#employeeForm");
let firstNames = document.getElementById("name");
let email = document.getElementById("email");
let role = document.getElementById("role");
let phoneNo = document.getElementById("phoneNo");
let gender = document.getElementById("gender");
let locations = document.getElementById("location");
let experience = document.getElementById("experience");
let skill = document.getElementById("skill");

employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    firstNames = firstNames.value;
    email = email.value;
    role = role.value;
    phoneNo = phoneNo.value;
    gender = gender.value;
    locations = locations.value;
    experience = experience.value;
    skill = skill.value;

    console.log("hello",firstNames, email, role, phoneNo, gender, locations, experience, skill);

})

async function employeeFetch() {
    const response = await fetch("https://nandakishore695.github.io/portfolio_javascript_yellow_black/api-projects/json/data.json");
    const reResponse = await response.json();
    console.log(reResponse);

}
employeeFetch();
