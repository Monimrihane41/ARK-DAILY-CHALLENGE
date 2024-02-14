const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

let nextId = products.length + 1;

app.route('/products')
  .get((req, res) => {
    res.json(products);
  })
  .post((req, res) => {
    const product = req.body;
    const id = nextId++;
    const newProduct = { id, ...product };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

app.route('/products/:id')
.get((req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: `Product with id ${id} not found` });
  }
})
.put((req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { id, ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: `Product with id ${id} not found` });
  }
})
.delete((req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: `Product with id ${id} not found` });
  }
});








app.listen(port, () => {
  console.log(`Server is listening on server: http://localhost:${port}/products)`);
});








// app.get('/products/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const product = products.find((product) => product.id === id);
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: `Product with id ${id} not found` });
//   }
// });