// para el boton ver mas
var btm_see_more1 = document.querySelector("#btn-hide-text1");
var btm_see_more2 = document.querySelector("#btn-hide-text2");
var btm_see_more3 = document.querySelector("#btn-hide-text3");
var hide_text1 = [...document.querySelectorAll("#hide-text1")];
var hide_text2 = [...document.querySelectorAll("#hide-text2")];
var hide_text3 = [...document.querySelectorAll("#hide-text3")];

// const button = [...document.querySelectorAll(".btn")];
// button.forEach(function(elemento, index, arreglo) {
//   arreglo[0].classList.add("btn-dark");
//   arreglo[1].classList.add("btn-dark");
// });
//array1.forEach(element => console.log(element));

btm_see_more1.addEventListener("click",toogleText1);
btm_see_more2.addEventListener("click",toogleText2);
btm_see_more3.addEventListener("click",toogleText3);

// FUNCION PARA VER MAS
function toogleText1(){
    hide_text1.forEach(element => element.classList.toggle("show"));
    if(btm_see_more1.textContent=="ver mas"){
        btm_see_more1.textContent="ver menos";
    }else{
        btm_see_more1.textContent="ver mas";
    }
    
}
// FUNCION PARA VER MAS
function toogleText2(){
    hide_text2.forEach(element => element.classList.toggle("show"));
    if(btm_see_more2.textContent=="ver mas"){
        btm_see_more2.textContent="ver menos";
    }else{
        btm_see_more2.textContent="ver mas";
    }
    
}
// FUNCION PARA VER MAS
function toogleText3(){
    hide_text3.forEach(element => element.classList.toggle("show"));
    if(btm_see_more3.textContent=="ver mas"){
        btm_see_more3.textContent="ver menos";
    }else{
        btm_see_more3.textContent="ver mas";
    }
    
}