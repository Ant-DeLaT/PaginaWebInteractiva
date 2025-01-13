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
    document.getElementById("textoClicks").innerText(clicks)
    }

function hazClick(){
    let clicks=(localStorage.getItem("clicks")||0);
    clicks++;
    localStorage.setItem("clicks",clicks);
    cuantosclicks;
}

function cambiaColor(){

    function numAlAzar(){
        return (Math.random()*255+1)
    }

    $("body").css("background-color","rgb ("+numAlAzar+","+numAlAzar+","+numAlAzar+")")
}
