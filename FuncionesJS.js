
console.log(!false);
function cambioClaro(){
    let claro=localStorage.getItem("claro");
    if(claro){ponerOscuro()}else{ponerClaro()};
    localStorage.setItem("claro",!claro);
    console.log("claro; "+localStorage.getItem("claro"))
}
function ponerOscuro(){
    console.log("PONEROSCURO");
    $("body").css("background-color","rgb(0,0,0)")
    $("body").css("color","rgb(255, 255, 255)")
}
function ponerClaro(){
    console.log("PONERClaro");
    $("body").css("background-color","rgb(255, 255, 255)")
    $("body").css("color","rgb(0,0,0)")
}

function cuantosclicks(){
    console.log("Cuantos?");
    clicks=localStorage.getItem("clicks");
    
    $("#textoClicks").innerText=(""+clicks)
    }

function hazClick(){
    console.log("CLICK!")
    let clicks;
    (localStorage.getItem("clicks"))?
    (clicks=parseInt(localStorage.getItem("clicks"))):
    (clicks=0);
    console.log(clicks)
    clicks=(parseInt(clicks)+1);
    localStorage.setItem("clicks",clicks);
    cuantosclicks();
}
function reinicioClicks(){
    console.log("Reiniciado")
    localStorage.setItem("clicks",0)
}

function cambiaColor(){
    console.log("CambiaColor")
    function numAlAzar(){
        let valor=Math.floor(Math.random()*256);
        return valor;
    }
    let color="rgb("+numAlAzar()+","+numAlAzar()+","+numAlAzar()+")";
    console.log("VALOR RGB: "+color);

    $("body").css("background-color",color);
    
}