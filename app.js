const btn = document.querySelector("button");
const para = document.querySelector("p");
const caard = document.querySelector(".card");

var facts = ["Bangladesh declared independence on 26th March, 1971.", "First President: Bangabandhu Sheikh Mujibur Rahman.", "Bangladesh achived victory in 16th December, 1971."];

btn.addEventListener("click", function(e){
    // para.textContent = facts[0];
    // para.classList.remove("typing");
    // para.classList.add("typing");

    e.preventDefault;

    para.classList.remove("typing");
    btn.classList.remove("active");

    void para.offsetWidth;

    para.classList.add("typing");
    btn.classList.add("active");
    para.textContent = facts[Math.floor(Math.random() * Math.floor(3))];
    

})

