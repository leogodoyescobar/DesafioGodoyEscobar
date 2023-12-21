class ProductManager{
    constructor(){
        this.products = [];
        this.id = 1;
    }
        
    AddProduct ( {title, description, price, thumbnail, code, stock} ){
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
    
        if (!product) {
            console.log("Producto no encontrado.");
        } else {
            return product;
        }
    }

}

const product = new ProductManager()

console.log( product.getProducts());

product.AddProduct({
    title: "Royal canin perro",
    description: "alimento balanceado",
    price: 23000,
    thumbnail: "url-img",
    code: 2000,
    stock: 10});
product.AddProduct({
    title: "pedigree perro",
    description: "alimento balanceado",
    price: 21500,
    thumbnail: "url-img",
    code: 2001,
    stock: 15});
product.AddProduct({
    title: "Excelent gato",
    description: "alimento balanceado",
    price: 19000,
    thumbnail: "url-img",
    code: 3000,
    stock: 14});

// Producto con datos incompletos
product.AddProduct({
    title: "Cat-Chow gato",
    description: "alimento balanceado",
    price: 19800,
    thumbnail: "url-img",
    code: 3005});

// Prueba de repeticion de parametro code
product.AddProduct({
    title: "Royal canin perro",
    description: "alimento balanceado",
    price: 18700,
    thumbnail: "url-img",
    code: 2000,
    stock: 14});

console.log( product.getProducts());

// Busqueda por id
console.log(product.getProductsById(2));

// busqueda de id inexistente
console.log(product.getProductsById(6));