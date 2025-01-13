if(localStorage.getItem("claro")){
    let claro=true;
    ponerClaro();
}else{
    ponerOscuro();
}
function cambioClaro(){
    claro=!claro;
    localStorage.setItem("claro","true")
    (claro)?ponerOscuro():ponerClaro();
}
function ponerOscuro(){
    document.getElementsByClassName("body")
}
function ponerOscuro(){

}

function cuantosclicks(){
    let clicks;
    (localStorage.getItem("clicks"))?
        (
        clicks=localStorage.getItem("clicks")):
        (
        clicks=0
    )
    document.getElementById("textoClicks").innerText(clicks);
    return clicks;
}

function hazClick(){
    let clicks=cuantosclicks();

}

function cambiaColor(){
    
}
