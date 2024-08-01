const botonAgregarMenu = document.querySelector(".botonAgregarMenu");
const entradaAgregarMenu = document.querySelector(".entradaAgregarMenu");
const agregarPizza = document.querySelector(".agregarPizza");
const mensajeAgrgarPizza = document.querySelector(".mensajeAgrgarPizza");
const selectMesas = document.querySelector(".selectMesas");
const btnAgregarMesa = document.querySelector(".btnAgregarMesa");

const mensajeDoble =document.querySelector(".mensajeDoble")
const mensajePizza= document.querySelector(".mensajePizza");
const mensajeMesa= document.querySelector(".mensajeMesa");
const mesaUno = document.querySelector(".mesaUno");
const mesaDos = document.querySelector(".mesaDos");
const mesaTres = document.querySelector(".mesaTres");
const mesaCuatro = document.querySelector(".mesaCuatro");

function limpiar() {
    entradaAgregarMenu.value = "";
    entradaAgregarMenu.focus();
}

function agregar() {
    let entrada = entradaAgregarMenu.value;
    if (!entradaAgregarMenu.value.trim()) {
        mensajeAgrgarPizza.innerHTML = "Menú no válido"
    } else {
        agregarPizza.innerHTML += `<option value="${entrada}">${entrada}</option>`;
        mensajeAgrgarPizza.innerHTML = "Menú agregado"
    }
    //recorrer()
    limpiar()
}//fin agregar()

/*function recorrer() {
    // se convierte al select en un array
    const arrayPizza = Array.from(agregarPizza.options);
    // const pizzas = arrayPizza.forEach(element => element)
    arrayPizza.forEach((element) => {
        const valor = element.value;
        if (valor==="Elige un menu") {
            console.log("Option invalida")
            } else {
                console.log("seleccionaste" + element.value)
        }
        });
        //console.log(pizzas)
        
        const arrayMesa = Array.from(selectMesas.options)
        const mesas = arrayMesa.map(element => element.value)
        console.log(mesas)
        }//fin recorrer()*/
        
function AgregarMenuMesa() {
    const valorMesa = selectMesas.value;
    const valorSeleccionado = agregarPizza.value;

    if (valorSeleccionado==="Elige un menu" && valorMesa==="Elegir Mesa") {
        mensajeDoble.innerHTML = "Menú y Mesa NO Válida"
    }  else if (valorMesa==="Elegir Mesa") {
       mensajeMesa.innerHTML = "Mesa No Válido"
    } else  if(valorSeleccionado==="Elige un menu"){
        mensajePizza.innerHTML = "Menú No Válido"
    } else if(valorMesa==="Mesa 1") {
        mesaUno.innerHTML += `${valorSeleccionado} `
    } else if(valorMesa==="Mesa 2") {
        mesaDos.innerHTML += `${valorSeleccionado} `
    } else if(valorMesa==="Mesa 3") {
        mesaTres.innerHTML += `${valorSeleccionado} `
    } else if(valorMesa==="Mesa 4") {
        mesaCuatro.innerHTML += `${valorSeleccionado} `
    } else {
        console.log("Mesa NO Válida"); 
    }
    
    
    
}




btnAgregarMesa.addEventListener('click', AgregarMenuMesa)
botonAgregarMenu.addEventListener('click', agregar)


btnAgregarMesa.addEventListener("blur", function(){
    mensajePizza.textContent = "";
    mensajeDoble.textContent = "";
    mensajeMesa.textContent = "";
})
entradaAgregarMenu.addEventListener("blur", function(){
    mensajeAgrgarPizza.textContent = "";
}) 
entradaAgregarMenu.addEventListener("input", function () {
    if (entradaAgregarMenu.value) {
        mensajeAgrgarPizza.textContent = "";
    }
})


