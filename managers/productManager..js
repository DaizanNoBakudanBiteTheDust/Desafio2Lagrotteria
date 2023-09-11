// dependencia de los NPM
const fs = require('fs');

export default class ProductManager{
    constructor(path) {
        this.path = path;
    }

// obtencion productos

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
}