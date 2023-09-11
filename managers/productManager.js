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

    createProducts = async (producto) =>{
        // Obtiene productos
        try {
            const products = await this.getProducts();

            if(products.lenght === 0){
                producto.id = 1;
            }else{
                producto.id = products[products.lenght -1].id + 1;
            }
            // se agrega el producto
            products.push(producto);

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\ts'));

            return producto;
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    ProductManager
}