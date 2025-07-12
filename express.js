const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products =[
    { id: 1, name: 'Computer', price: 15000},
    { id: 2, name: 'Phone', price: 4500}
];

//Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});
 //Get specic product
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productsId);

    if(!product){
        return res.status(404).json({ message: 'Product not found'});
    }
    res.json(product);
});

app.post('/api/products', (req, res) => {
    const { name, price } = req.body;

if (!name || price === undefined) {
        return res.status(400).json({ message: 'Name and price are required' });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price


});

app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { name, price } = req.body;

    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;

    res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const deleted = products.splice(index, 1);
    res.json({ message: 'Product deleted', product: deleted[0] });
});

app.listen(port, ()=>{
    console.log('Server is running on http://localhost:3000');
});