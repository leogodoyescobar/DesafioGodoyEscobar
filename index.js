const express = require('express')
const ProductManager = require('./ProductManager')

const app = express()
let productos = new ProductManager

app.get('/', ( req, res)=> {
    res.send('Bienvenido a tales petshop');
})

app.get("/productos", async (req, res)=> {
    const limit = parseInt(req.query.limit) || 0;
    let resp = await productos.getProducts();
    if (limit > 0) {
        resp = resp.slice(0, limit);
    }
    res.json(resp);
})

app.get("/producto/:id",  (req, res) => {
    let id = parseInt(req.params.id)
    productos.getProductById(id)
    .then ( (product) => {
        if (product) {
            res.json( product)
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