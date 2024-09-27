// guardo en variables los campos donde mostrare el resultado
// y guardo el boton para asignar evento
const botonConvertir = document.querySelector("#convertir");
let g1 = document.getElementById("G1");
let g2 = document.getElementById("G2");

//guardo datos del select y el valor digitado por el usuario
function convertir() {
    const queGrado = document.getElementById("queGrado").value;
    const grados = document.getElementById("grados").value;
    let gradoC;
    let gradoK;
    let gradoF;

//valido en que tipo de grados esta el dato ingresado
//celsius, fahrenheit o kelvin, de esto depende operacion
//matematica. y despues muestro el resultado en los div dispuesto
//para ello
    switch(queGrado){
        case "celsius":
            gradoF = ((grados * 1.8) + 32);
            gradoK =  (gradoF + 459.67)* (5/9);
            g1.innerText = `${gradoF.toFixed(2)} Grados Fahrenheit`;
            g2.innerText = `${gradoK.toFixed(2)} Grados Kelvin`;
            break;
        case "fahrenheit":
            gradoC = ((grados - 32) / 1.8);
            gradoK = ((grados + 459.67) * 5/9);
            g1.innerText = `${gradoC.toFixed(2)} Grados Celsius`;
            g2.innerText = `${gradoK.toFixed(2)} Grados Kelvin`;
            break;
        case "kelvin":
            gradoC = (grados - 273.15);
            gradoF = ((grados * 9/5) - 459.67);
            g1.innerText = `${gradoC.toFixed(2)} Grados Celsius`;
            g2.innerText = `${gradoF.toFixed(2)} Grados Fahrenheit`;
            break
            
    } 
    

}

//genero escucha por si ocurre el evento
botonConvertir.addEventListener("click", convertir);


