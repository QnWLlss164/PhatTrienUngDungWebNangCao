import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import asyncHandler from "express-async-handler";
import Restaurant from "./Models/RestaurantModel.js";
import restaurants from "./data/restaurant.js";
import Product from "./Models/ProductModel.js";
import products from "./data/product.js";
import Categories from "./Models/CategoryModel.js";
import category from "./data/category.js";
import Posts from "./Models/PostModel.js";
import posts from "./data/post.js";
const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/post",
  asyncHandler(async (req, res) => {
    await Posts.deleteMany({});
    const importPost = await Posts.insertMany(posts);
    res.send({ importPost });
  })
);

ImportData.post(
  "/restaurant",
  asyncHandler(async (req, res) => {
    await Restaurant.deleteMany({});
    const importRes = await Restaurant.insertMany(restaurants);
    res.send({ importRes });
  })
);

ImportData.post(
  "/product",
  asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importRes = await Product.insertMany(products);
    res.send({ importRes });
  })
);


ImportData.post(
  "/categories",
  asyncHandler(async (req, res) => {
    await Categories.deleteMany({});
    const importCat = await Categories.insertMany(category);
    res.send({ importCat });
  })
);

export default ImportData;
