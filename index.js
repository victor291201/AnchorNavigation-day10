var inicio = document.getElementById("idinicio");
var servicio = document.getElementById("idservicio");
var conocenos = document.getElementById("idconocenos");

var ini = document.getElementById("inicio");
if(window.location!="file:///C:/Users/Estudiante.UNIMAG-PC/Desktop/dia%2010/index.html"){
    window.location.href = "file:///C:/Users/Estudiante.UNIMAG-PC/Desktop/dia%2010/index.html"
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
if(URLactual.toString().length>66){
    ini.classList.remove("ini");
    servicio.classList.remove("active");
    conocenos.classList.remove("active");
    inicio.classList.add("active")
}