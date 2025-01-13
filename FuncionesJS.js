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
    console.log("Cuantos?")
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
    console.log("CLICK!")
    let clicks;
    (localStorage.getItem("clicks"))?
    (clicks=localStorage.getItem("clicks")):
    (clicks=0);
    clicks++;
    localStorage.setItem("clicks",clicks);
    cuantosclicks;
}

function cambiaColor(){
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
      }
      
      genNew.addEventListener("click", setBg);
      setBg();


    console.log("CambiaColor")
    function numAlAzar(){
        return (Math.random()*255+1)
    }
// rgb ("+numAlAzar+","+numAlAzar+","+numAlAzar+")
    $("body").css("background-color","random")
}