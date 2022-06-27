var inicio = document.getElementById("idinicio");
var servicio = document.getElementById("idservicio");
var conocenos = document.getElementById("idconocenos");

var ini = document.getElementById("inicio");
if(window.location!="https://victor291201.github.io/AnchorNavigation-day10/"){
    window.location.href = "https://victor291201.github.io/AnchorNavigation-day10/"
}
inicio.addEventListener("click",()=>{
    servicio.classList.remove("active");
    conocenos.classList.remove("active");
    inicio.classList.add("active")
})
servicio.addEventListener("click",()=>{
    ini.classList.remove("ini");
    inicio.classList.remove("active");
    conocenos.classList.remove("active");
    servicio.classList.add("active")
})
conocenos.addEventListener("click",()=>{
    ini.classList.remove("ini");
    servicio.classList.remove("active");
    inicio.classList.remove("active");
    conocenos.classList.add("active")
})
var URLactual = window.location;
if(URLactual.toString().length>54){
    ini.classList.remove("ini");
    servicio.classList.remove("active");
    conocenos.classList.remove("active");
    inicio.classList.add("active")
}