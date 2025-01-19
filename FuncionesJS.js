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
    $("body").css("background-color","rgb(9, 18, 44)")
    $("body").css("color","rgb(255, 255, 255)")

    $(".btn").css("color","rgb(255, 255, 255)")
    $(".btn").css("background-color","rgb(135, 35, 65)")

    $("header").css("background-color","rgb(225, 117, 100)")

    $("#flechaArriba").css("background-color","rgb(190, 49, 68)")
}
// rgb(9, 18, 44) rgb(135, 35, 65) rgb(190, 49, 68) rgb(225, 117, 100)
function ponerClaro(){
    console.log("PONERClaro");
    $("body").css("background-color","rgb(251, 245, 221)")
    $("body").css("color","rgb(0,0,0)")

    $(".btn").css("color","rgb(255, 255, 255)")
    $(".btn").css("background-color","rgb(221, 168, 83)")

    $("#flechaArriba").css("background-color","rgb(190, 49, 68)")

    $("header").css("background-color","rgb(166, 205, 198)")
}

//  rgb(251, 245, 221)   rgb(166, 205, 198)   rgb(22, 64, 77)   rgb(221, 168, 83)



function cuantosclicks(){
    console.log("Cuantos?");
    clicks=localStorage.getItem("clicks");
    $("#textoClicks").text((clicks));
    }


    



window.addEventListener("scroll",function(){
    let cuantoBaja=document.documentElement.scrollTop;
    let altoActual=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let bajado=(cuantoBaja / altoActual) * 100;
    document.querySelector("#barraProgreso").style.width = bajado + "%"; 
    }
)




// Lector texto
let texto=new FileReader("./CucuiGanon.txt")
// .then(respuesta => respuesta.texto())
// .then(datos=>{
//     document.getElementById('fileContent').textContent=datos;
// })
// .catch(error => console.error('Error al leer'))



// const hablar = new SpeechSynthesisUtterance(texto);
// hablar.lang="es";
// window.speechSynthesis.speak(texto);
// console.log(hablar)
function hablar(texto){
    console.log("HABLAMEEEEE")
    const mensage=new SpeechSynthesisUtterance();
    
    mensage.text=texto;
    mensage.volume=1;
}

//     $("#lector").click(
//         (haComenzado==null)?
//             null:(
//             hablar.cancel()
//         ),
//         haComenzado=true,
//         hablar.speak()
//     )
//     $("#PARENLOOO").click(
//       ()=>{ 
//             if (haComenzado!=null) {
//                 if (haComenzado==true) {
//                     cuentameUnCuento.pause()
//                     haComenzado=false;
//                 } else {
//                     cuentameUnCuento.resume()
//                 }
//             }
//         }
//     )



function cambioTamanyo(){
    console.log("CLICK2")
    let tamanyo
    if (localStorage.getItem("tamanyo")==null && tamanyo==undefined) {
       tamanyo="grande";
    }else{
        tamanyo=localStorage.getItem("tamanyo")
        console.log("ELSE"," ",)
    }

    if (tamanyo=="pequenyo"){
        $("body").css("font-size","x-large")
        localStorage.setItem("tamanyo","grande")
        console.log("grande ",localStorage.getItem("tamanyo"))
    }else{
        $("body").css("font-size","x-small")
        localStorage.setItem("tamanyo","pequenyo")
        console.log("pequenyo ",localStorage.getItem("tamanyo"))
    }
}
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
        console.log("Hora actual ",hora);
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

      



    window.addEventListener("scroll",()=>{
        if((document.documentElement.scrollHeight - document.documentElement.clientHeight)>20){
            $("flechaArriba").css("display","none")
        }else{
            $("flechaArriba").css("display","block")
        }
    });
    textoSaludo()

    claro=localStorage.getItem("claro");
    (claro=="true")?(ponerClaro()):(ponerOscuro())

    cuantosclicks()
}

)
