// let todoList = [
//     {name: "Javascript"},
//     {name: "PHP"},
//     {name: "Java"},
//     {name: "CMS"},
//     {name: "Python"},
// ];
// const LIST_ELEMENT = document.querySelector('#list');
// todoList.forEach(item => {
//     const todo = `
//         <li>${item.name}</li>
//     `;
//     LIST_ELEMENT.insertAdjacentHTML("beforeend", todo); // display order (insertAdjacentHTML we can display)
// });

// const LIST_ELEMENT = document.querySelector('#list'); // catch ul

// const todo = `
//     <li></li>
// `;
// LIST_ELEMENT.insertAdjacentHTML("beforeend", todo);

// document.addEventListener('keydown',event => {
//     if(event.key == "Enter"){

//     }
// });

// // want to display to input
// document.addEventListener('keydown',event => {
//     var result = document.querySelector('input').value;
//     if(event.key == "Enter"){
//         console.log(result)
//     }
// });

// pel yg bnjul oy input empty
// const INPUT_ELEMENT = document.querySelector('input');
// document.addEventListener('keydown', event => {
//     if(event.key === "Enter") {
//         console.log(INPUT_ELEMENT.value);
//         LIST_ELEMENT.insertAdjacentHTML("beforeend",todo);
//         INPUT_ELEMENT.value = "";
//     }
// });


// when input has or not display all on html
// const INPUT_ELEMENT = document.querySelector('input');
// document.addEventListener('keydown', event => {
//     if (event.key === "Enter") { 
//         const todo = `
//             <li>${INPUT_ELEMENT.value}</li>
//         `;
//         LIST_ELEMENT.insertAdjacentHTML("beforeend", todo);
//         INPUT_ELEMENT.value = "";
//     }
// });

// catch value by ul
const LIST_ELEMENT = document.querySelector('#list');

// when input empty don't display on hmlt
// const INPUT_ELEMENT = document.querySelector('input');
// document.addEventListener('keydown', event => {
//     if (event.key === "Enter") {
//         let isNotEmpty = INPUT_ELEMENT.value != "";
//         if (isNotEmpty) {
//             const todo = `
//                 <li>${INPUT_ELEMENT.value}</li>
//             `;
//             LIST_ELEMENT.insertAdjacentHTML("beforeend", todo);
//         }
//         INPUT_ELEMENT.value = "";
//     }
// });

// clear code by function
const INPUT_ELEMENT = document.querySelector('input');
document.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        let isNotEmpty = INPUT_ELEMENT.value != "";
        if (isNotEmpty) {
            toDO(INPUT_ELEMENT.value); // value ban pi input
        }
        INPUT_ELEMENT.value = "";
    }
});

function toDO(todo){
    const todos = `
        <li>${todo}</li>
    `;
LIST_ELEMENT.insertAdjacentHTML("beforeend", todos);
}

// display date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();
document.querySelector('h1').innerHTML = today.toLocaleString('en-Us', options);