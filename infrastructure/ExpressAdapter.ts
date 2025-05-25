import express from 'express';
import { ExternalProductRepository } from './ExternalProductRepository';
import { ProductService } from '../application/ProductService';
import { UserService } from '../application/UserService';
import { ExternalUserRepository } from './ExternalUserRepository';

const app = express();
const PORT = 3000;

const productRepo = new ExternalProductRepository();
const productService = new ProductService(productRepo);

const userRepo = new ExternalUserRepository();
const userService = new UserService(userRepo);

app.get('/products', async (_, res) => {
  const products = await productService.getAll();
  res.json(products);
});

app.get('/products/:id', async (req, res) => {
  const product = await productService.getById(Number(req.params.id));
  res.json(product);
});

app.get('/users', async (_, res) => {
  const users = await userService.getAll();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await userService.getById(Number(req.params.id));
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Onion App (Node) listening at http://localhost:${PORT}`);
});
