window.addEventListener('scroll', function(){

progreso();

})

function progreso(){

    let scroll = document.documentElement.scrollTop;
    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progreso = (scroll/alto)*100;
    document.getElementsByClassName("barra")[0].style.width = progreso +"%";

}