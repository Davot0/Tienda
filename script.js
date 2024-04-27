let carrito = {};

function agregarAlCarrito(nombre, precio) {
    if (carrito[nombre]) {
        carrito[nombre].cantidad++;
    } else {
        carrito[nombre] = {
            precio: precio,
            cantidad: 1
        };
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    let total = 0;
    for (const nombre in carrito) {
        const producto = carrito[nombre];
        const item = document.createElement('li');
        item.textContent = `${nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}`;
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('boton-eliminar');
        botonEliminar.addEventListener('click', function() {
            eliminarDelCarrito(nombre);
        });


        item.appendChild(botonEliminar);
        listaCarrito.appendChild(item);
        total += producto.precio * producto.cantidad;
    }

    const totalElemento = document.getElementById('total');
    totalElemento.textContent = `$${total}`;
}

function eliminarDelCarrito(nombre) {
    delete carrito[nombre];
    mostrarCarrito();
}

function pagar() {
    // Aquí puedes agregar la lógica para procesar el pago
    alert('¡Gracias por tu compra! El pago ha sido procesado.');
    // Limpia el carrito después de realizar el pago
    carrito = {};
    mostrarCarrito(); // Actualiza la vista del carrito para mostrar que está vacío
}