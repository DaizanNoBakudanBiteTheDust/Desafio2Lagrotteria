class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = ( title, description, price, thumbnail, stock, code) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            stock,
            code,
            
        }

        if (this.products.length === 0){
            product.code = 1;
        }else{
            product.code = this.products[this.products.length - 1].code + 1;
        }

        this.products.push(product);
    }

    getProductById = (idProduct) => {
        const indexProduct = this.products.findIndex(product => product.code === idProduct);

        if(indexProduct === -1) {
            return console.log('Producto no encontrado');
           
        }else{
           return this.products[indexProduct]
        }

        
    }

}

const productHandler = new ProductManager();

productHandler.addProduct('camisa', 'manga larga', 20, 'camisa con imagen gatito', 5)
productHandler.addProduct('pantalon', 'corto', 10, 'pantalon con parche gatito', 25)
console.log(productHandler.getProductById(1))