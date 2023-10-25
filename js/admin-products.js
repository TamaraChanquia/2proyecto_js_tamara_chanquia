let idEditar;
const btn = document.querySelector('button.btn[type="submit"]');
const tableBodyHTML = document.getElementById("table-products");

let productos = JSON.parse(localStorage.getItem("productos"));

pintarProductos(productos);

const inputFiltrarHTML = document.getElementById("filtrar");

const formularioProductoHTML = document.getElementById("formularioProducto");

const agregarBtn = document.getElementById("admin-add-product");

agregarBtn.addEventListener("click", () => {
    formularioProductoHTML.reset();
});

formularioProductoHTML.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const el = formularioProductoHTML.elements;

    let id = crypto.randomUUID();


    let nuevoUsuario = {
        id: id,
        full: el.name.value,
        email: el.email.value,
        password: el.password.value,
        role: el.role.value,
    };

    if (idEditar) {
        const index = productos.findIndex((producto) => {
            return producto.id === idEditar;
        });

        productos[index] = nuevoProducto;

        idEditar = undefined;

        btn.innerText = "Agregar producto";
        btn.classList.remove("btn-success");
    } else {
        productos.push(nuevoProducto);
    }

    Swal.fire({
        icon: "success",
        title: "Producto agregado/modificado correctamente",
        text: "El producto se actualizo o modifico correctamente!",
    });

    pintarProductos(productos);

    localStorage.setItem("productos", JSON.stringify(productos));

    formularioProductoHTML.reset();
    el.tituloName.focus();
});

function pintarProductos(arrayAPintar) {
    tableBodyHTML.innerHTML = "";

    arrayAPintar.forEach(function (producto, index) {
        tableBodyHTML.innerHTML += `<tr>
                <td class="table-image">
                        <img src="${producto.imagen}" alt="${producto.titulo}">
                </td>
                <td class="table-title">${producto.titulo}</td>
                <td class="table-description">${producto.descripcion}</td>
                <td class="table-price">${producto.precio}</td>
                <td class="table-cuotas">${producto.cuotas}</td>
                <td class="table-category">${producto.categoria}</td>
                <td class="table-date">${producto.fechaDeCreacion}</td>
                <td >
                    <div class="d-flex gap-1">
                        <button class="btn-delete btn btn-danger btn-sm" onclick="borrarProducto('${producto.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-success btn-sm" onclick="editarProducto('${producto.id}')" data-bs-toggle="modal" data-bs-target="#formModal">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                    
                </td>
            </tr>`;
    });
}

//Funcion para filtrar productos
inputFiltrarHTML.addEventListener("keyup", (evt) => {
    const busqueda = evt.target.value.toLowerCase();

    const resultado = productos.filter((producto) => {
        const titulo = producto.titulo.toLowerCase();

        if (titulo.includes(busqueda)) {
            return true;
        }
        return false;
    });
    pintarProductos(resultado);
});

const borrarProducto = (idABuscar) => {
    Swal.fire({
        title: "Desea borrar producto",
        icon: "error",
        text: "Realmente desea elminar el producto?",
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Borrar",
    }).then((result) => {
        if (result.isConfirmed) {
            const indiceEncontrado = productos.findIndex((productoFindIndex) => {
                if (productoFindIndex.id === idABuscar) {
                    return true;
                }
                return false;
            });
            productos.splice(indiceEncontrado, 1);

            pintarProductos(productos);

            localStorage.setItem("productos", JSON.stringify(productos));

            Swal.fire("Borrado!", "Producto borrado correctamente", "success");
        }
    });
};

const editarProducto = function (idRecibido) {
    const productoEditar = productos.find((prod) => {
        if (prod.id === idRecibido) {
            return true;
        }
    });

    if (!productoEditar) return;

    idEditar = productoEditar.id;

    const elements = formularioProductoHTML.elements;

    elements.tituloName.value = productoEditar.titulo;
    elements.precio.value = productoEditar.precio;
    elements.cuotas.value = productoEditar.cuotas;
    elements.descripcion.value = productoEditar.descripcion;
    elements.imagen.value = productoEditar.imagen;
    elements.categoria.value = productoEditar.categoria;

    btn.innerText = "Editar Producto";
    btn.classList.add("btn-success");
};

function obtenerFecha() {
    const fecha = new Date();
    let mes = fecha.getMonth() + 1;
    if (mes < 10) {
        mes = "0" + mes;
    }
    let dia = fecha.getDate();
    if (dia < 10) {
        dia = "0" + dia;
    }
    const year = fecha.getFullYear();

    const fechaFormateada = `${year}-${mes}-${dia}`;
    return fechaFormateada;
}
