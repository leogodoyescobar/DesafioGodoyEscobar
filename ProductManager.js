const fs = require('fs');
class ProductManager{
    constructor(){
        this.products = [];
        this.id = 1;
        this.path = './productos.json'
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
    
    writeToFile(test) {
        fs.promises.writeFile( test, JSON.stringify(this.products, null, 2), { encoding: 'utf-8' } )
        .then( resp => {
            console.log('Archivo productos.json creado correctamente')
        })
        .catch( err => {
            console.log('Error al crear archivo', err)
        })
    }

    async readFile() {
        try {
            let res = await fs.promises.readFile(this.path, 'utf-8');
            console.log('Lectura de archivo productos.json a continuacion:', res);
            return res
        } catch (err) {
            console.log('Error:', err);
        }
    }

    async readFileById(id) {
        try {
            let res = await fs.promises.readFile(this.path, 'utf-8');
            let product = this.products.find(pr => pr.id === id);
            return product
        } catch (err) {
            console.log('Error:', err);
        }
    }

    
    updateProduct(id, { title, description, price, thumbnail, code, stock }) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = {
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
            console.log(`Producto con ID ${id} actualizado correctamente.`);
        } else {
            console.log(`No se encontró un producto con ID ${id}. La actualización no fue posible.`);
        }
    }
}
const path = "./productos.json";
// const product = new ProductManager()

// console.log( product.getProducts());

// product.AddProduct({
//     title: "Royal canin perro",
//     description: "alimento balanceado",
//     price: 23000,
//     thumbnail: "url-img",
//     code: 2000,
//     stock: 10});
// product.AddProduct({
//     title: "pedigree perro",
//     description: "alimento balanceado",
//     price: 21500,
//     thumbnail: "url-img",
//     code: 2001,
//     stock: 15});
// product.AddProduct({
//     title: "Excelent gato",
//     description: "alimento balanceado",
//     price: 19000,
//     thumbnail: "url-img",
//     code: 3000,
//     stock: 14});

// Producto con datos incompletos
// product.AddProduct({
//     title: "Cat-Chow gato",
//     description: "alimento balanceado",
//     price: 19800,
//     thumbnail: "url-img",
//     code: 3005});

// Prueba de repeticion de parametro code
// product.AddProduct({
//     title: "Royal canin perro",
//     description: "alimento balanceado",
//     price: 18700,
//     thumbnail: "url-img",
//     code: 2000,
//     stock: 14});

// console.log( product.getProducts());

// Busqueda por id
// console.log(product.getProductsById(2));

// busqueda de id inexistente
// console.log(product.getProductsById(6));


// Llamado a funcion para actualizar datos
// product.updateProduct(2, {
//     title: "Pedigree perro",
//     description: "alimento balanceado",
//     price: 26000,
//     thumbnail: "url-img",
//     code: 2001,
//     stock: 19
// });


// product.writeToFile(path);


// const read = async ()=>{
//     try{
//         let resp = await fs.promises.readFile(path, 'utf-8')
//         console.log('Lectura de archivo txt: ', resp)
//     }catch(err){
//         console.log('Error: ', err)
//     }
// }

// product.readFile(path);

module.exports = ProductManager
