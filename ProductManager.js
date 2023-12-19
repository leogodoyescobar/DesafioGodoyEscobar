class ProductManager{
    constructor(){
        this.products = [];
        this.id = 1;
    }
        
    AddProduct ( title, description, price, thumbnail, code, stock ){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos son obligatorios, el producto ${title} no se agrego.`);
        } else if (!this.products.some((p) => p.code === code )){
            let newProduct = {id: this.id++, title, description, price, thumbnail, code, stock}
            this.products.push(newProduct);
            console.log(`Se agrego el producto ${title} correctamente`);
        } else {
            console.log(`El producto ${title} ya existe.`);
        }
    }

    getProducts(){
        return this.products;
    }

    getProductsById(id){
        let product = this.products.find(product => product.id === id);
    
        if (product == undefined) {
            console.log("Producto no encontrado.");
        } else {
            return product;
        }
    }

}

const product = new ProductManager()

console.log( product.getProducts());

product.AddProduct("Royal canin perro", "alimento balanceado", 23000, "url-img", 2000, 10);
product.AddProduct("pedigree perro", "alimento balanceado", 21500, "url-img", 2001, 15);
product.AddProduct("Excelent gato", "alimento balanceado", 19000, "url-img", 3000, 14);

// Producto con datos incompletos
product.AddProduct("Cat-Chow gato", "alimento balanceado", 19800, "url-img", 3005);

// Prueba de repeticion de parametro code
product.AddProduct("Royal canin perro", "alimento balanceado", 18700, "url-img", 2000, 14);

console.log( product.getProducts());

// Busqueda por id
console.log(product.getProductsById(2));

// busqueda de id inexistente
console.log(product.getProductsById(6));