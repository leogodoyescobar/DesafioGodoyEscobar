const express = require('express')
const ProductManager = require('./ProductManager')

const app = express()
let productos = new ProductManager

app.get('/', ( req, res)=> {
    res.send('Bienvenido a tales petshop');
})

app.get("/Productos", async (req, res)=> {
    let resp = await productos.readFile();
    // const parsedResp = JSON.parse(resp);
    res.send(resp);
})

app.get("/producto/:id",  (req, res) => {
    let id = (req.params.id)
    let productoFnd = productos.find( (producto) => {
        return producto.id === id
    })
    res.send(productoFnd)

    // productos.readFileById(id)
    // .then( (product) => {
    //     if (product) { res.send(product)
    //     } else {'Producto no encontrado'}
    // })
})

app.listen(8080, ()=> {
    console.log('server run on port 8080')
}) 