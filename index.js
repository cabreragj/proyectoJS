let productos = [];
const containerProd = document.querySelector("#container");
const botones = document.querySelector("#card-btn");
const btnCarrito = document.getElementById("btn-carrito");
let carritoProductos = [];
let carritoProductosLS = localStorage.getItem("contenido-carrito");

cantProductos();

fetch('./productos.json')
  .then(Response => Response.json())
  .then(data => {
    productos = data;
    cargaProd();
  }
)

if (carritoProductosLS) {
  carritoProductos = JSON.parse(carritoProductosLS);

} else {
  carritoProductos = [];
}

function cargaProd() {
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto')
    div.innerHTML =
      `
      <img class="card-img-top" alt="${producto.nombre}" src="${producto.img}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.tipo} ${producto.marca} - $${producto.precio}</p>
      </div>
      <button class='card-btn' id='${producto.id}'>Comprar</button>
 `;
    containerProd.append(div);
  }
  )
  refrescarBtn()
}

function refrescarBtn() {
  const agregaProd = document.querySelectorAll('.card-btn');
  agregaProd.forEach(botones => {
    botones.addEventListener('click', agregarAlCarrito);
  }
  )
}

function agregarAlCarrito(e) {
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Agregaste un producto',
    showConfirmButton: false,
    timer: 1000
  })
  const btnId = e.currentTarget.id;
  console.log(btnId)
  const prodsumado = productos.find(producto => producto.id === btnId);
  if (carritoProductos.some(producto => producto.id === btnId)) {
    const indice = carritoProductos.findIndex(producto => producto.id === btnId);
    carritoProductos[indice].cantidad++;
  } else {
    prodsumado.cantidad = 1;
    carritoProductos.push(prodsumado);
    console.log(prodsumado.nombre);
  }
  console.log(carritoProductos);
  localStorage.setItem('contenido-carrito', JSON.stringify(carritoProductos));
  cantProductos()
}

function cantProductos() {
  let carritoProductosLS = localStorage.getItem("contenido-carrito");
  let cant = JSON.parse(carritoProductosLS).reduce((total, producto) => total + (producto.cantidad), 0);
  btnCarrito.textContent = 'Carrito (' + cant + ')';
}

