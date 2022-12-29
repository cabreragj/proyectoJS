function compra() {
  alert("Buenos dias, bienvenido a Hardware World")
  alert("ingrese la opcion correspondiente a su producto")
  let productos = Number(prompt("1-mother $5500 \n 2-procesador $7000 \n 3-memoria $5000 \n 4-fuente $4500 \n 0-salir"))
  let cantidadProducto;
  let total = 0;

  while (productos != 0) {
    switch (productos) {
      case 1:
        cantidadProducto = Number(prompt("usted ingreso mother, indique la cantidad de componentes"))
        total += cantidad(cantidadProducto, 5500)
        break;
      case 2:
        cantidadProducto = Number(prompt("usted ingreso procesador, indique la cantidad de componentes"))
        total += cantidad(cantidadProducto, 7000)
        break;
      case 3:
        cantidadProducto = Number(prompt("usted ingreso memoria, indique la cantidad de componentes"))
        total += cantidad(cantidadProducto, 5000)
        break;
      case 4:
        cantidadProducto = Number(prompt("usted ingreso fuente, indique la cantidad de componentes"))
        total += cantidad(cantidadProducto, 4500)
        break;
      default:
        alert("caracter invalido")
        break;
    }
    productos = Number(prompt("1-mother $5500 2-procesador $7000 3-memoria $5000 4-fuente $4500 "))
  }
  alert("el total de la compra es de: " + total)
  if (total != 0) {
    tipoPago(total)
  }
}

const tipoPago = (total) => {
  let pago = prompt("como quiere abonar sus productos, tarjeta o efectivo")
  if (pago == "tarjeta") {
    total *= 1.1
    alert("el total es: " + total)
  } else if (pago == "efectivo") {
    total -= 1500
    alert("pagos en efectivo superiores a $4000 llevan $1500 de descuento, el total es:" + total)
  }
  else {
    alert("caracter invalido")
  }
  alert("Muchas gracias, Saludos")
}

const cantidad = (cant, precio) => {
  return cant * precio
}

compra()