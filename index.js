const express = require('express')
const ProductManager = require('./ProductManager')

const app = express()
let productos = new ProductManager

app.get('/', ( req, res)=> {
    res.send('Bienvenido a tales petshop');
})

app.get("/productos", async (req, res)=> {
    let resp = await productos.getProducts();
    const parsedResp = JSON.parse(resp);
    res.send(parsedResp);
})

app.get("/producto/:id",  (req, res) => {
    let id = parseInt(req.params.id)
    productos.getProductById(id)
    .then ( (product) => {
        if (product) {
            res.send( product)
        } else {
            res.send(`No hay producto`)
        }
    })
    .catch( (err) => {
        console.log(`No hay producto`)
    } )
})

app.listen(8080, ()=> {
    console.log('server run on port 8080')
}) 