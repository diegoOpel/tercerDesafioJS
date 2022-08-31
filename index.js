class Producto{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    };
    vender = cantidad =>{
        if(cantidad>this.stock){
            alert(`No hay stock suficiente de ${this.nombre}`);
        }else{
            this.stock -= cantidad;
            alert(`Que disfrutes tus ${cantidad} ${this.nombre}!`);
        };
    };
    agregarStock = cantidad => {
        this.stock += cantidad;
        alert(`Ahora hay ${this.stock} unidades de ${this.nombre}`);
    }
};

const productos = [];

const sumaProducto = () => {
    let repetidor = parseInt(prompt("Cuantos productos distintos quieres agregar?"));
    for(let i = 0;i<repetidor;i++){
        let nombre = prompt("Ingresa el nombre del producto");
        let precio = parseFloat(prompt(`Ingresa el precio del producto: ${nombre}:`));
        let stock = parseInt(prompt(`Ingresa el stock del producto: ${nombre}:`));
        const producto = new Producto(productos.length,nombre,precio,stock);
        productos.push(producto);
};
};

const muestraProductos = () => {
    if(productos.length===0){
        alert("No hay productos para mostrar");
        return;
    }else{
        for(let producto of productos){
            alert(`PRODUCTO: ID:${producto.id} - NOMBRE: ${producto.nombre.toUpperCase()} - PRECIO: ${producto.precio} - STOCK ACTUAL: ${producto.stock}`);
        };
    };
};

const compraProductos = () => {
    if(productos.length===0){
        alert("No hay productos para comprar");
        return;
    }else{
        alert("Te mostraremos los productos disponibles para comprar");
        muestraProductos();
        let id = parseInt(prompt("Que producto quieres comprar? Ingresá el ID"));
        let cantidad = parseInt(prompt(`Cuantos ${productos[id].nombre} deseas comprar?`));
        productos[id].vender(cantidad);
    };
}

const sumaStock = () => {
    if(productos.length===0){
        alert("No hay productos para stockear");
        return;
    }else{
        alert("Te mostraremos los productos disponibles para sumar stock");
        muestraProductos();
        let id = parseInt(prompt("Que producto quieres stockear? Ingresá el ID"));
        let cantidad = parseInt(prompt("Cuantos productos se agregarán al stock?"));
        productos[id].agregarStock(cantidad);
    };
};

const eliminaProductos = () => {
    if(productos.length===0){
        alert("No hay productos para eliminar");
        return;
    }else{
        alert("Te mostraremos los productos disponibles para eliminar");
        muestraProductos();
        let id = parseInt(prompt("Que producto quieres eliminar? Ingresá el ID"));
        productos.splice(id, id+1);
        alert("Se ha eliminado el producto con éxito");
    };
    
}

const menu = () => {
    let opcion = parseInt(prompt("Elige entre estas opciones (ingresa un número): \n 1-Sumar un producto nuevo. \n 2-Sumar stock a un producto existente \n 3-Ver los productos disponibles \n 4-Comprar productos \n 5-Eliminar un producto existente"));
    switch(opcion){
        case 1:
            sumaProducto();
            break;
        case 2:
            sumaStock();
            break;
        case 3:
            muestraProductos();
            break;
        case 4:
            compraProductos();
            break;
        case 5:
            eliminaProductos();
            break;
        default:
            alert("Opción no válida");
            break;
    }
};
const continuar = () =>{
    let loopeador = prompt("¿Deseas volver al Menú? S/N");
    if (loopeador.toLowerCase() === "s"){
        return true;
    }else if(loopeador.toLowerCase() === "n"){
        return false;
    }else {
        alert("Ingrese un valor válido S o N");
        continuar();
    }
};
do{
    menu();
}while(continuar());



