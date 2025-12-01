'use strict'
// select all buttons with the class button
// const arrylist = document.querySelectorAll('.button');

// select body for apply background color
// const body = document.querySelector('body')

// arrylist.forEach((button)=>{
// selcection button click get id value
//     button.addEventListener('click', function(e){
//         if(e.target){
// change the body background color
//             body.style.backgroundColor = e.target.id;
//         } 
//     });
// });

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body')
for (let index = 0; index < buttons.length; index++) {
    debugger
    buttons[index].addEventListener('click', function (e) {
        body.style.backgroundColor = e.target.id;
    })
};