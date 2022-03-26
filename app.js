const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {    
  res.send(
    `<!DOCTYPE html>
    <html>
    <head>
        <title>Выберите страницу</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <input type="button" value="categories" onClick="document.location = 'categories'"/>
        <input type="button" value="images" onClick="document.location = 'images'"/>
        <input type="button" value="product" onClick="document.location = 'product'"/>
        <input type="button" value="products" onClick="document.location = 'products'"/>
    </body>
    <html>`
  )
})

app.get('/categories', (req, res) => {
    console.log('******** Call - categories ********');
    const mapCategory = require('./mappers/categories.ts');  
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.send( mapCategory );
})

app.get('/images', (req, res) => {
    console.log('******** Call - images ********');
    const images = require('./mappers/images.ts');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');  
    res.send( images );
})

app.get('/product', (req, res) => {
    console.log('******** Call - product ********');
    const product = require('./mappers/product-info-mosk.ts');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');  
    res.send( product );
})

app.get('/products', (req, res) => {
    console.log('******** Call - products ********');
    const products = require('./mappers/products.mock.ts');  
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send( products);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})