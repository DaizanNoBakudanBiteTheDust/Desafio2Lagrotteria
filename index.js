const { ProductManager } = require("./managers/productManager.js")

const manager = new ProductManager('./files/productos.json');

const enviar = async() =>   {
    const productos =  await manager.getProducts();

    const product = {
        titulo : 'Escoba',
        descripcion: 'barre piso',
        precio: '30$',
        thumbnail: 'https://www.avalco.cl/3650-thickbox_default/escoba5costuras.jpg',
        code: '121123',
        stock: '10',
    };

    await manager.addProducts(product);

    const productosResultadoFinal = await manager.getProducts();
    const obtenerID = await manager.getProductById(4);
   
    // muestra productos
    console.log(productosResultadoFinal);

   // busca por id segun lo indicado en obtener id
    console.log(obtenerID);
}

enviar();