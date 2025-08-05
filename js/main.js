//Estilos segun resoluciones
function actualizarElementos() {
    const titulo = document.querySelector(".main_info-title");
    const parrafo = document.querySelector(".main_info-description");
    const subtitle = document.querySelector(".main_info-subtitle");
    
    
    if (window.innerWidth > 1024) {
      titulo.classList.remove('text-preset-2');
      titulo.classList.add('text-preset-1');
      parrafo.classList.remove('text-preset-4');
      parrafo.classList.add('text-preset-3');
      subtitle.classList.remove('text-preset-6');
      subtitle.classList.add('text-preset-5');
    } else {
      titulo.classList.remove('text-preset-1');
      titulo.classList.add('text-preset-2');
      parrafo.classList.remove('text-preset-3');
      parrafo.classList.add('text-preset-4');
      subtitle.classList.remove('text-preset-5');
      subtitle.classList.add('text-preset-6');
    }
  }

window.addEventListener('load', actualizarElementos);
window.addEventListener('resize', actualizarElementos);

const isDesktop = window.matchMedia("(min-width: 1024px)");


// Carrusell imagenes
const mainImage = document.querySelector(".main_producto-img");
const imgs = document.querySelectorAll(".main_producto-carrusell-img");

imgs.forEach(img => {
    img.addEventListener("mouseover", () => {
        const imageNumber = img.dataset.image;
        mainImage.src = `./images/image-product-${imageNumber}.jpg`;
      });
});


// Abrir cerrar menu
const menu = document.querySelector(".menu");
const abrir_menu = document.querySelector(".header_menu");
const cerrar_menu = document.querySelector(".menu_cerrar");
const overlay = document.querySelector(".overlay");

abrir_menu.addEventListener("click", () => {
  menu.classList.add("activo");
  overlay.classList.add("activo");
})

cerrar_menu.addEventListener("click", () => {
  menu.classList.remove("activo");
  overlay.classList.remove("activo");
})


// Galeria emergente
const gallery = document.querySelector(".vista_previa");
const mainGalleryImage = document.querySelector(".vista_previa-img");
const galleryImgs = document.querySelectorAll(".vista_previa-carrusell-img");
const galleryOverlay = document.querySelector(".galleryOverlay");
const cerrarGallery = document.querySelector(".cerrar_producto");

mainImage.addEventListener("click", () => {
  if (isDesktop.matches) {
  mainGalleryImage.src = mainImage.src;
  gallery.classList.remove("hidden");
  galleryOverlay.classList.add("activo");
  }
});

galleryImgs.forEach((img) => {
  if (isDesktop.matches) {
  img.addEventListener("click", () => {
    const num = img.dataset.image;
    mainGalleryImage.src = `./images/image-product-${num}.jpg`;
  });
}
});

cerrarGallery.addEventListener("click", () => {
  if (isDesktop.matches) {
  gallery.classList.add("hidden");
  galleryOverlay.classList.remove("activo");
  }
})



// Desplegar carro
const carrito = document.querySelector(".header_carro");
const cart = document.querySelector(".cart");


carrito.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});


const mas = document.querySelector(".mas");
const menos = document.querySelector(".menos");
const cantidad = document.querySelector(".main_info-cantidad-number");

mas.addEventListener("click", () => {
  let valorActual = parseInt(cantidad.textContent, 0);
  cantidad.textContent = valorActual + 1;
})

menos.addEventListener("click", () => {
  let valorActual = parseInt(cantidad.textContent, 0);
  if (valorActual != 0) {
    cantidad.textContent = valorActual - 1;
  }
})


// Añadir producto al carrito
const boton_añadir_producto = document.querySelector(".main_info-carro");
const carroVacio = document.querySelector(".cart_aviso");
const producto = document.querySelector(".checkout");
const numero = document.querySelector(".cart_cantidad");
const precioFinal = document.querySelector(".cart_producto-total");
const notificacion = document.querySelector(".noti");

boton_añadir_producto.addEventListener("click", () => {
  let unidades = parseInt(cantidad.textContent);

  numero.textContent = unidades;
  carroVacio.classList.add("hidden");
  producto.classList.remove("hidden");

  let precioTotal = 125 * unidades
  precioFinal.textContent = `$${precioTotal}.00`;

  notificacion.classList.remove("hidden");
  notificacion.textContent = unidades;

  })

const eliminar = document.querySelector(".cart_producto-eliminar");

eliminar.addEventListener("click", () => {
  producto.classList.add("hidden");
  carroVacio.classList.remove("hidden");
  notificacion.classList.add("hidden");
})