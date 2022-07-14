const rates = document.querySelectorAll(".rates span");
const main = document.querySelector("main");
const submit = document.querySelector("form");
const thank = document.querySelector(".card-content-2");
const rSpan = document.querySelector(".card-content-2 .result div span");

let choice = 0
rates.forEach(span=>{
    span.onclick = function(){
        rates.forEach(s=>{
            s.classList.remove("active");
        });
        span.classList.add("active");
        choice = span.innerHTML
    }
});
submit.onsubmit = function(e){
    e.preventDefault();
    thank.classList.remove("hide");
    main.classList.add("hide");
    console.log("done")
    rSpan.innerHTML = choice;
}