const { ProductManager } = require("./managers/productManager.js")

const manager = new ProductManager('./files/productos.json');

const enviar = async() =>   {
    const productos =  await manager.getProducts();
    console.log(productos);
}

enviar();