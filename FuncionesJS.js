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
    cuantosclicks()
}

function cambiaColor(){
    console.log("CambiaColor")
    function numAlAzar(){
        let valor=Math.floor(Math.random()*256);
        return valor;
    }
    let color="rgb("+numAlAzar()+","+numAlAzar()+","+numAlAzar()+")";
    console.log("VALOR RGB: "+color);

    $("#fondoVoluble").css("background-color",color);
}
function cambioBrillo(){
    let claro=cambioClaro();
    if(claro=="true"){ponerOscuro();claro=false}else{ponerClaro();claro=true}
    console.log("ANtclaro; "+localStorage.getItem("claro"))
    localStorage.setItem("claro",claro);
    console.log("dESpclaro; "+localStorage.getItem("claro"))
}
function cambioClaro(){
    let esBlanco=localStorage.getItem("claro");
    console.log("esBlanco",esBlanco)
    return esBlanco;
}
function ponerOscuro(){
    console.log("PONEROSCURO");
    $("body").css("background-color","rgb(0,0,0)")
    $("body").css("color","rgb(255, 255, 255)")
    $(".btn").css("color","rgb(0, 0, 0)")
    $(".btn").css("background-color","rgb(255, 139, 139)")
}
function ponerClaro(){
    console.log("PONERClaro");
    $("body").css("background-color","rgb(255, 255, 255)")
    $("body").css("color","rgb(0,0,0)")
    $(".btn").css("color","rgb(255, 255, 255)")
    $(".btn").css("background-color","rgb(0, 0, 255)")
}

function cuantosclicks(){
    console.log("Cuantos?");
    clicks=localStorage.getItem("clicks");
    $("#textoClicks").text((clicks));
    }


const barraProgreso=$("#barraProgreso");
const seccion= $("seccion");
const progresoBarra=function(){
    let cantidadBajada=-seccion.getBoundingClientRect().top;
    let porcentajeProgreso=(cantidadBajada/(Selection.getBoundingClientRect().height-document.documentElement.clientHeight))*100;
    let val=Math.floor(porcentajeProgreso);

    (val<0)?(val=0):null;
    barraProgreso.style.width=val+"%";
}
window.addEventListener('scroll',progresoBarra)



// let haComenzado=null;
// const cuentameUnCuento=cuentameUnCuento.fetch("./CucuiGanon.txt")
// .then(linea => linea.text("CucuiGanon.txt"))
// .catch(err=>console.error("ERROR: ",err.message));

// JAVASCRIPT LISTO
$(document).ready(()=>{
    function textoSaludo(){
        let hora=Math.floor((Date.now()/(3600*1000)+1)%24)
        if (hora<12) {
            buenosDias()
        } else if(hora<20){
            buenasTardes()
        } else{
            buenasNoches()
        }
        console.log(hora);
    }
    function buenosDias(){
        $("#paraCambiar").text("Buenos días");
    }
    function buenasTardes(){
        $("#paraCambiar").text("Buenas tardes");
    }
    function buenasNoches(){
        $("#paraCambiar").text("Que descanseis milord/milady");
    }


    // const detectado =new SpeechRecognition();
    // const listaReconocida = new SpeechGrammarList();

    // function parlanchin(){
        
    // }
    

    // $("#lector").click(
    //     (haComenzado==null)?
    //         null:(
    //         // cancel()
    //         null
    //     ),
    //     haComenzado=true,
        
    //     cuentameUnCuento.speak()
    // )
    // $("#PARENLOOO").click(
    //   ()=>{ 
    //         if (haComenzado!=null) {
    //             if (haComenzado==true) {
    //                 cuentameUnCuento.pause()
    //                 haComenzado=false;
    //             } else {
    //                 cuentameUnCuento.resume()
    //             }
    //         }
    //     }
    // )

    textoSaludo()
    claro=localStorage.getItem("claro");
    (claro=="true")?(ponerClaro()):(ponerOscuro())
    cuantosclicks()
}

)
