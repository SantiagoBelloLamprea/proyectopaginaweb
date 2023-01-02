var figura1 = document.querySelector("#btn_img1");
var figura2 = document.querySelector("#btn_img2");
var figura3 = document.querySelector("#btn_img3");
var progressBar = document.querySelector("#progress-bar");

figura1.addEventListener('click',carga1);
figura2.addEventListener('click',carga2);
figura3.addEventListener('click',carga3);

function carga1(){
    progressBar.setAttribute("style","width:30%");
}
function carga2(){
    progressBar.setAttribute("style","width:65%");
}
function carga3(){
    progressBar.setAttribute("style","width:100%");
}
