const { ProductManager } = require("./managers/productManager.js")

const manager = new ProductManager('./files/productos.json');

const enviar = async() =>   {
    const productos =  await manager.getProducts();

    const product = {
        titulo : 'marco',
        descripcion: 'para cuadros',
        precio: '30$',
        thumbnail: 'https://www.avalco.cl/3650-thickbox_default/escoba5costuras.jpg',
        code: '121123',
        stock: '10',
    };

    await manager.addProducts(product);

       // muestra productos
    const productosResultadoFinal = await manager.getProducts();

     console.log(productosResultadoFinal);

      // busca por id segun lo indicado en obtener id

    const obtenerID = await manager.getProductById(4);

     console.log(obtenerID);

   // elimina producto con id 4 como menciona arriba

    const eliminarProducto = await manager.deleteProductById(4);

    console.log(eliminarProducto)


}

enviar();