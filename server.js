import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/foodDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Product Schema
const Product = mongoose.model("Product", new mongoose.Schema({
    name: String,
    price: Number,
    image: String
}));

// Cart Schema
const Cart = mongoose.model("Cart", new mongoose.Schema({
    items: Array
}));

// ROUTES -------------------------------

// Home
app.get("/", (req, res) => {
    res.send("Basic Backend Running 👍");
});

// Get all products
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add product
app.post("/products/add", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product added" });
});

// Add to cart
app.post("/cart/add", async (req, res) => {
    const cart = await Cart.findOne();

    if (!cart) {
        const newCart = new Cart({ items: [req.body] });
        await newCart.save();
    } else {
        cart.items.push(req.body);
        await cart.save();
    }

    res.json({ message: "Item added to cart" });
});

// Get cart
app.get("/cart", async (req, res) => {
    const cart = await Cart.findOne();
    res.json(cart || { items: [] });
});

// ----------------------------------------

app.listen(5000, () => console.log("Server running on port 5000"));
