import {Producto} from "./Producto.js";
let prod1= new Producto (1, 'B450 gaming plus', 5500, 'Mother', 'Asus');
let prod2= new Producto (2, 'Ryzen 5', 7000, 'Procesador', 'AMD');
let prod3= new Producto (3, 'Orion rgb 16gb', 5000, 'Memoria', 'Geil');
let prod4= new Producto (4, 'Thor 850w', 4500, 'Fuente', 'Asus');


function compra() {
  alert("Buenos dias, bienvenido a Hardware World")
  alert("Ingrese la opcion correspondiente a su producto")
  let productos = Number(prompt(" 1 - "+prod1.tipo+" "+prod1.nombre+" $"+prod1.precio+"\n 2 - "+prod2.tipo+" "+prod2.nombre+" $"+prod2.precio+"\n 3 - "+prod3.tipo+" "+prod3.nombre+" $"+prod3.precio+"\n 4 - "+prod1.tipo+" "+prod4.nombre+" $"+prod4.precio+ "\n -1 - Eliminar producto \n 0 - Salir"))
  let cantidadProducto;
  let productoEliminar;
  let total = 0;
  let indice= 0;
  let carrito = []

  while (productos != 0) {
    switch (productos) {
      case 1:
        cantidadProducto = Number(prompt("Usted ingreso "+prod1.tipo+" "+prod1.nombre+", indique la cantidad de componentes"))
          for (let i = 0; i < cantidadProducto; i++) {
            carrito.push(prod1)
            console.log(i,carrito)
          }
        break;
      case 2:
        cantidadProducto = Number(prompt("Usted ingreso "+prod2.tipo+" "+prod2.nombre+", indique la cantidad de componentes"))
        for (let i = 0; i < cantidadProducto; i++) {
          carrito.push(prod2)
        }
        break;
      case 3:
        cantidadProducto = Number(prompt("Usted ingreso "+prod3.tipo+" "+prod3.nombre+", indique la cantidad de componentes"))
        for (let i = 0; i < cantidadProducto; i++) {
          carrito.push(prod3)
        }
        break;
      case 4:
        cantidadProducto = Number(prompt("Usted ingreso "+prod4.tipo+" "+prod4.nombre+", indique la cantidad de componentes"))
        for (let i = 0; i < cantidadProducto; i++) {
          carrito.push(prod4)
        }
        break;
      case -1:
        let p="";
        alert("Seleccione el producto que desea eliminar")
        carrito.forEach(producto=> {
          p= p + "\n" + indice + "- " + producto.nombre 
          indice++;
        })
        productoEliminar = Number(prompt(p))
        carrito.splice(productoEliminar,1)
        indice= 0;
      
      default:
        break;
      }
      productos = Number(prompt("1 - "+prod1.tipo+" "+prod1.nombre+" $"+prod1.precio+"\n 2 - "+prod2.tipo+" "+prod2.nombre+" $"+prod2.precio+"\n 3 - "+prod3.tipo+" "+prod3.nombre+" $"+prod3.precio+"\n 4 - "+prod1.tipo+" "+prod4.nombre+" $"+prod4.precio+ "\n -1 - Eliminar producto \n 0 - Salir"))
    }   
    let p="";
    // Utilice una variable indice, ya que en el caso que halla productos duplicados el IndexOf no daria los indices correctos
    carrito.forEach(producto=> {
    p= p + "\n" + indice + "- " + producto.tipo + " " + producto.nombre + " $" + producto.precio 
    indice++;
    })
    total= calcularTotal(carrito)

    alert( p + " \n El total de la compra es de: " + total)
    if (total != 0) {
      tipoPago(total)
    }
  }

const tipoPago = (total) => {
  let pago = prompt("como quiere abonar sus productos, tarjeta o efectivo")
  if (pago == "tarjeta") {
    total *= 1.1
    alert("El total es: " + total)
  } else if (pago == "efectivo") {
    total -= 1500
    alert("Pagos en efectivo superiores a $4000 llevan $1500 de descuento, el total es: " + total)
  }
  else {
    alert("Caracter invalido")
  }
  alert("Muchas gracias, Saludos")
}

const cantidad = (cant, precio) => {
  return cant * precio
}

const calcularTotal = (carrito) => {
  let total = 0;
  console.log(carrito)
  carrito.forEach(producto=> {
    console.log(producto.precio)
    total+=producto.precio
  });
  return total;
}


compra()