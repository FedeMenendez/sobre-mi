function calcular (){
    if (document.getElementById ("numero1").value === "" || document.getElementById ("numero2").value ===""){
        window.alert ("No se pueden ingresar valores nulos");
    }
    let numero1=  Number(document.getElementById ("numero1").value);
    let numero2 = Number (document.getElementById ("numero2").value);
    let operacion = document.getElementById ("operador").value;
    let resultado = 0;
    const text = "Valores Invalidos";
    const text1 = "La division por cero no es posible";
    const text2 = "resultado muy grande o muy pequeño para ser mostrado";
    if (isNaN (numero1) || isNaN (numero2)){
        document.getElementById ("resultado").value = text;
    }
    else if (numero2 === 0 && operacion=="division"){
        alert (text1);
    }
    else{
        switch (operacion){
        case "suma":
            resultado =numero1 + numero2;
            break;
        case "resta":
            resultado= numero1 - numero2;
            break;
        case "multiplicacion":
            resultado =numero1 * numero2;
            break;
        case "division":
            resultado = numero1/numero2;
            break;
        /* case "raiz":
            resultado=Math.sqrt(numero2)
            break; */
        }
        if ((resultado<1000000000&&resultado>0.000000001) || (resultado>-1000000000&&resultado<-0.000000001) || resultado === 0){
            document.getElementById ("resultado").value=resultado;
        }
        else{                
            alert (text2);
        }
    } 
}
function limpiar (){
    document.getElementById ("numero1").value="";
    document.getElementById ("numero2").value="";
    document.getElementById ("operador").value = "suma";
    document.getElementById ("resultado").value="";
}

function cambiarColor (){
    const color =document.getElementById("color").value;
    switch (color){
        case "rojo":
            document.body.style.backgroundColor = "lightcoral";
            break;
        case "azul":
            document.body.style.backgroundColor = "lightblue";
            break;
        case "verde":
            document.body.style.backgroundColor = "lightgreen";
            break;
        case "amarillo":
            document.body.style.backgroundColor ="yellow";
            break;
        case "blanco":
            document.body.style.backgroundColor = "white";
            break;
        case "gris":
            document.body.style.backgroundColor = "gray";
            break;
        default:
            alert ("Error");
    }
}
document.getElementById("cambiar").addEventListener("click",cambiarColor);