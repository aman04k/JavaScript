//ACCESSING ELEMENt

var btn = document.querySelector('button');
// btn.textContent = "Starting 3 sec....";


// var aman = document.querySelector("h1");
// aman.innerHTML+= "<i>Aman Prajapati</i>";

// aman.style.color = "red";

btn.addEventListener('click', function(){
    alert("Hello aman");
    btn.textContent = "Kajal";
    btn.style.backgroundColor = "red";
})