// dependencia de los NPM
const fs = require('fs');

class ProductManager{
    constructor(path) {
        this.path = path;
    }

// obtencion productos devuelve arreglo vacio si no hay 

    getProducts = async () => {
        try{
             // leo contenido
            if(fs.existsSync(this.path)){
               const data = await fs.promises.readFile(this.path, 'utf-8');
               const products = JSON.parse(data);
               return products;
            }
             // sino arreglo vacio
            else{
                return[]
            }
        }
        catch(error){
            console.log(error);
        }
    }

    //Creo productos

    addProducts = async (producto) =>{
        // Obtiene productos
        try {
            const products = await this.getProducts();

            if(products.length === 0){
                producto.id = 1;
            }else{
                producto.id = products[products.length -1].id + 1;
            }
            // se agrega el producto
            products.push(producto);

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));

            return producto;
            
        } catch (error) {
            console.log(error)
        }
    }

    getProductById = async (idProduct) => {

        const products = await this.getProducts();

        const indexProduct = products.findIndex(product => product.id === idProduct);

        if(indexProduct === -1) {
            return console.log('Producto no encontrado');
           
        }else{
           return products[indexProduct]
        }

        
    }

    deleteProductById = async (idProduct) => {

        const products = await this.getProducts();

        const indexProduct = products.findIndex(product => product.id === idProduct);

        if(indexProduct === -1) {
            return console.log('Producto no encontrado');
           
        }else{
            // Elimina producto
            products.splice(indexProduct, 1);

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 4));

            console.log('Producto eliminado con éxito');
            return true;
        }

        
    }
}

module.exports = {
    ProductManager
}