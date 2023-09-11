const productManager = require('./managers/productManager.js');

const manager = new productManager('./files/productos.json');

const enviar = async() =>   {
    const productos =  await manager.getProducts();
}