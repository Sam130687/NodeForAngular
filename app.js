const express = require('express');
const app = express();
const port = 3000;

let basket = [];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
  next();
})

app.get('/basket', (req, res) => {
  console.log('******** Call - basket - get ********');  
  res.send( basket );
})

app.delete('/basket/:id', (req, res) => {
  console.log(`******** Call - basket - delete ********`);  

  let id = req.params['id']; 
  
  if (!id) res.sendStatus(500);

  let ind = basket.findIndex((item)=>item.id == id);

  if (ind > -1){
    basket.splice(ind, 1);
  }

  res.sendStatus(200);
})

app.post('/basket/:id', (req, res) => {
  console.log(`******** Call - basket - post ********`);  

  let id = req.params['id']; 
  
  if (!id) res.sendStatus(500);

  const products = require('./mappers/products.mock.ts');  
  const product = products.find((item) => item.id == id);

  if (product) {basket.push(product)};

  res.sendStatus(200);
})

app.get('/categories', (req, res) => {
    console.log('******** Call - categories ********');
    const mapCategory = require('./mappers/categories.ts');  
    res.send( mapCategory );
})

app.get('/images', (req, res) => {
    console.log('******** Call - images ********');
    const images = require('./mappers/images.ts');
    res.send( images );
})

app.get('/product/:id', (req, res) => {
    console.log('******** Call - product ********');
    let _id = req.params['id'];
    console.log(`id: ` + _id);
    const products = require('./mappers/product-info-mosk.ts');
    let product = products.find(item => item.id == _id);
    res.send( product );
})

app.get('/products', (req, res) => {
    console.log('******** Call - products ********');
    const products = require('./mappers/products.mock.ts');  
    res.send( products);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})