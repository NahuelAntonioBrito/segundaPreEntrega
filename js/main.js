// clase para la creacion de las bebidas
class Bebida {

    constructor(nombre, litros, costo, stock){
        this.nombre = nombre;
        this.litros = litros;
        this.costo = costo;
        this.stock = stock;
    }

    controlStock(bebidaSolicitada){
        hayStock = true;
        if (bebidaSolicitada.stock > 0){
            bebidaSolicitada.stock --;
        }else{
            hayStock = false;
        }
        return hayStock;
    }
}

//Funciones
function mostrarLista(listas){
    listas.forEach(lista => {
        console.log("Nombre: ", lista.nombre);
        console.log("litros: ", lista.litros);
        console.log("costo: ", lista.costo);
    });
}

function formaDePago(costoTotal){
    alert(nombre + " Como desea pagar efectivo o tarjeta");
    alert("Si paga con targeta tendra un recargo del 10%");
    alert("Si paga en efectivo tendra un descuento del 10%");

    let tipoDePago = prompt("Ingrese efectivo o Tarjete dependiendo con cual desee pagar").toLowerCase();

    while((tipoDePago !== "efectivo") && (tipoDePago  !== "tarjeta")){
        alert("Error, Por favor ingrese una de las formas de pago antes mencionadas");
        tipoDePago = prompt("Ingrese efectivo o Tarjete dependiendo con cual desee pagar");
    }

    let costoFinal = 0;
    if (tipoDePago == "efectivo"){
        costoFinal =  costoTotal - (costoTotal * 0.10);
        console.log("Costo final en efectivo ", costoFinal);
    }else if(tipoDePago == "tarjeta"){
        costoFinal = costoTotal + (costoTotal * 0.10);
        console.log("Costo final en tarjeta ", costoFinal);
    }
    return costoFinal;
}

//Las distintas bebidas en stock
const bebida1 = new Bebida("fernet", "1L", 2000, 5);
const bebida2 = new Bebida("vodka", "1L", 4400, 7);
const bebida3 = new Bebida("ron", "1L", 7500, 3);
const bebida4 = new Bebida("cerveza", "500ml", 500, 20);

// inicio del sistema
alert("Bienvenido a nuestro sistema de registro de usuario");

const nombre = prompt("Ingrese su nombre");

alert("Bienvenido " + nombre + " a nuestra tienda online");

let edad = prompt("Ingrese su edad");

while (edad < 18){
    alert(nombre + " no es mayor de edad");
    edad = prompt("Ingrese nuevamente su edad");
}

alert("Escriba el nombre de la bebida que desea comprar");
alert("Tenga en cuenta que nuestro catalogo solo cuenta con los siguientes productos");
alert("Fernet, Vodka, Ron, Cerveza");

let costoTotal = 0;
let bebidas = [];

//Solicita la cantidad de items a comprar
let cantidadDeItems = parseInt(prompt("Ingrese la cantidad de items que desea comprar"));

if (cantidadDeItems <= 0){
    alert("No desea comprar ninguna bebida")
    alert("Fin del programa")
} else{
    hayStock = false;
    for(let i = 0; i < cantidadDeItems; i++){
        const bebidaDeseada = prompt(nombre + " ingrse el nombre de la bebida que desea comprar").toLowerCase();
        switch(bebidaDeseada){
            
            case bebida1.nombre:
                hayStock = bebida1.controlStock(bebida1);
                if (hayStock){
                    costoTotal += bebida1.costo;
                    console.log('El costo del '+ bebida1.nombre + ' es de: ' + bebida1.costo );
                    alert(nombre + " el costo del "+ bebidaDeseada + " es de: $" + bebida1.costo);
                    //carga de item a la lista de compra
                    bebidas.push(bebida1);
                    break;
                }else{
                    alert("No contamos actualmente con stock de " + bebidaDeseada + " disculpe las molestias")
                    break;
                }
    
            case bebida2.nombre:

            hayStock = bebida2.controlStock(bebida2);
            if (hayStock){
                costoTotal += bebida2.costo;
                console.log('El costo del '+ bebida2.nombre + ' es de: ' + bebida2.costo );
                alert(nombre + " el costo del "+ bebidaDeseada + " es de: $" + bebida2.costo);
                //carga de item a la lista de compra
                bebidas.push(bebida2);
                break;
            }else{
                alert("No contamos actualmente con stock de " + bebidaDeseada + " disculpe las molestias")
                break;
            }
    
            case bebida3.nombre:
                hayStock = bebida3.controlStock(bebida3);
                if (hayStock){
                    console.log('El costo del '+ bebida3.nombre + ' es de: ' + bebida3.costo );
                    costoTotal += bebida3.costo;
                    alert(nombre + " el costo del "+ bebidaDeseada + " es de: $" + bebida3.costo);
                    //carga de item a la lista de compra
                    bebidas.push(bebida3);
                    break;
                }else{
                    alert("No contamos actualmente con stock de " + bebidaDeseada + " disculpe las molestias")
                    break;
                }
                
    
            case bebida4.nombre:

                hayStock = bebida4.controlStock(bebida4);
                if (hayStock){
                    costoTotal += bebida4.costo;
                    console.log('El costo del '+ bebida4.nombre + ' es de: ' + bebida4.costo );
                    alert(nombre + " el costo de la cerveza es de: $" + bebida4.costo);
                    //carga de item a la lista de compra
                    bebidas.push(bebida4);
                    break;
                }else{
                    alert("No contamos actualmente con stock de " + bebidaDeseada + " disculpe las molestias")
                    break;
                }

            default:
                alert("No contamos actualmente con stock de " + bebidaDeseada + " disculpe las molestias")
        }
    }

    if (bebidas.length > 0){
        //Muestra la lista de compras
        mostrarLista(bebidas);
    
        alert( nombre + " el costo total de la compra es de: " + costoTotal);
    
        //Consulta y aplica los cambios al costo final de la compra
        const costoActualizado = formaDePago(costoTotal);
    
        alert("El costo final de la compra es de: " + costoActualizado)
    }
    
    
    alert("Fin del Programa")
}