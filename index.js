const productos = [
  {
    id: '1',
    nombre: 'B450 gaming plus',
    precio: 5500,
    tipo: 'Mother',
    marca: 'Asus',
    img: "./img/mother icono.jpg"
  },
  {
    id: '2',
    nombre: 'Ryzen 5',
    precio: 7000,
    tipo: 'Procesador',
    marca: 'AMD',
    img: "./img/micro icono.jpg"
  },
  {
    id: '3',
    nombre: 'Orion rgb 16gb',
    precio: 5000,
    tipo: 'Memoria',
    marca: 'Geil',
    img: "./img/ram icono.jpg"
  },
  {
    id: '4',
    nombre: 'Thor 850w',
    precio: 4500,
    tipo: 'Fuente',
    marca: 'Asus',
    img: "./img/fuente icono.jpg"
  },

];
let carritoProductos = [];
let carritoProductosLS = localStorage.getItem("contenido-carrito");

if (carritoProductosLS) {
  carritoProductos = JSON.parse(carritoProductosLS);
  
} else {
  carritoProductos = [];
}

const calcularTotal = (carrito) => {
  let total = 0;
  console.log(carrito)
  carrito.forEach(producto => {
    console.log(producto.precio)
    total += producto.precio
  });
  return total;
}

const containerProd = document.querySelector("#container");
const botones = document.querySelector("#card-btn");

console.log(containerProd)
function cargaProd() {
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto')
    div.innerHTML =
      `
      <img class="card-img-top" alt="${producto.nombre}" src="${producto.img}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.tipo} ${producto.marca} ${producto.precio}</p>
      </div>
      <button class='card-btn' id='${producto.id}'>Comprar</button>
 `;
    containerProd.append(div);
  }
  )
}
cargaProd();

const agregaProd = document.querySelectorAll('.card-btn');

agregaProd.forEach(botones => {
  botones.addEventListener('click', agregarAlCarrito);
}
)

function agregarAlCarrito(e) {
  const btnId = e.currentTarget.id;
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
}

