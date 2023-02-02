let carritoProductos = localStorage.getItem('contenido-carrito');
carritoProductos = JSON.parse(carritoProductos);
console.log(carritoProductos);
const containerProdCarrito = document.querySelector("#container-carrito");

const btnvaciar = document.querySelector('.btn-vaciar');
const btnComprar = document.querySelector('.btn-comprar');


function cargaCarrito() {
  containerProdCarrito.innerHTML = "";
  if (carritoProductos && carritoProductos.length > 0) {
    containerProdCarrito.classList.remove('disabled');
    console.log(containerProdCarrito)
    carritoProductos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto-carrito')
      div.innerHTML =
        `
        <img class="card-img-carrito" alt="${producto.nombre}" src="${producto.img}">
        <div class="card-body-carrito">
          <h5 class="card-title-carrito">${producto.nombre}</h5>
          <p class="card-text-carrito">${producto.tipo} ${producto.marca} Cantidad ${producto.cantidad} Precio Uni. $ ${producto.precio}</p>
        </div>
        <button class='eliminar-carrito' id='${producto.id}'>Eliminar</button>
   `;
      containerProdCarrito.append(div);
      actualizarBotonesEliminar();
      
    }
    )
    sumarValorTotal();
  }
}
cargaCarrito();
actualizarBotonesEliminar();

function actualizarBotonesEliminar() {
  let btnEliminarProd = document.querySelectorAll('.eliminar-carrito');
  btnEliminarProd.forEach(botones => {
    botones.addEventListener('click', eliminarProdCarrito);
  })
}

function eliminarProdCarrito(e) {
  const btnId = e.currentTarget.id;
  const prodEliminado = carritoProductos.find(producto => producto.id === btnId);
  const indice = carritoProductos.findIndex(producto => producto.id === btnId);
  carritoProductos.splice(indice, 1);
  actualizarBotonesEliminar();
  cargaCarrito();
  localStorage.setItem('contenido-carrito', JSON.stringify(carritoProductos));
}


btnvaciar.addEventListener('click',vaciarElcarrito);

function vaciarElcarrito() {
  carritoProductos.length = 0;
  localStorage.setItem('contenido-carrito', JSON.stringify(carritoProductos));
  cargaCarrito();
}

function sumarValorTotal() {
const precioTotal= carritoProductos.reduce((total, producto) => total + (producto.cantidad * producto.precio) , 0);

  const div = document.createElement('div');
      div.classList.add('total')
      div.innerHTML =
        `
          <p class="card-total"> Total: ${precioTotal}</p>
   `;
   containerProdCarrito.append(div);

}

btnComprar.addEventListener('click', hacerCompra);

function hacerCompra() {
  carritoProductos.length = 0;
  localStorage.setItem('contenido-carrito', JSON.stringify(carritoProductos));
  cargaCarrito();
}