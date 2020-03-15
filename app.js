const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db/products.json');
const db = low(adapter);

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
    const ret = {
        msg: 'hello from products api'
    }
    res.json(ret);
})

app.get('/sum', function (req, res){
    const x = +req.query.x || -9999;
    const y = +req.query.y || -9999;
    const s = x + y;
    res.json({x, y, s});

})

app.get('/product-detail/:id', function(req, res){
    const ret = db.get('products')
        .find({ id : +req.params.id })
        .value();
    res.json(ret);
})

app.get('/product', function(req, res){
    const ret = db.get('products');
    res.json(ret);
})

app.post('/add-product', function(req, res){
    // const product = {
    //   'id' : 100,
    //   'name' : 'new',
    //   'price' : 8888
    // }
    const product = req.body;
    db.get('products')
      .push(product)
      .write();
    
    res.status(201).json(product);
})

const PORT = 4000;
app.listen(PORT, function() {
    console.log(`APT running on port ${PORT}`);
})


 