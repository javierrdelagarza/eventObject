// event objetct argument event
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link")

// heading.addEventListener("click", () => {
//     heading.classList.add("blue");
// });

heading.addEventListener("click",function (e) {
    console.log(e.currentTarget);
    console.log(this); //this no funcion arrow functions
})

btn.addEventListener("click", (e) => {
        e.currentTarget.classList.add("blue");
        console.log(e.type)
    });

// example with function outside of event listener

function someFunc(e) {
    e.preventDefault();
}

link.addEventListener("click", someFunc); 
//declared function separately