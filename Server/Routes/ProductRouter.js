import express from "express";
import asyncHandler from "express-async-handler";
import {
  admin,
  protect,
} from "../Middleware/AuthMiddleware.js";
import Product from "../Models/ProductModel.js";
import Restaurant from "../Models/RestaurantModel.js";
import upload from "../Middleware/Upload.js";

const productRoute = express.Router();

productRoute.get("/chart",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.find({}, "name views");
      res.json(product)
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }))

productRoute.get('/search', asyncHandler(async (req, res) => {
  const keyword = req.query.q || ""; // từ khóa tìm kiếm
  const page = Number(req.query.page) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;

  const filter = {
    $or: [
      { name: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
    ]
  };

  const products = await Product.find(filter).skip(skip).limit(limit);
  const total = await Product.countDocuments(filter);

  res.json({
    products,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  });
}));


productRoute.get("/top",
  asyncHandler(async (req, res) => {
    try {
      const foods = await Product.find()
        .sort({ rating: -1 })
        .limit(10)

      res.status(200).json(foods);
    } catch (error) {
      console.error("Lỗi khi lấy món ăn top rating:", error);
      res.status(500).json({ message: "Lỗi server." });
    }
  }))

//Get all product
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Product.countDocuments({});
    const products = await Product.find({})
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: 1 });
    res.json({ products, count, page, pages: Math.ceil(count / pageSize) });
  })
);

// ADMIN GET ALL PRODUCT WITHOUT SEARCH AND PEGINATION
productRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const page = Number(req.query.pageNumber) || 1;
    const limit = 12;
    const skip = (page - 1) * limit;
    const keyword = req.query.keyword
      ? {
        name: { $regex: req.query.keyword, $options: "i" }, // tìm theo tên sản phẩm, không phân biệt hoa thường
      }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip);

    res.json({
      products,
      page,
      pages: Math.ceil(count / limit),
    });
  })
);

// GET SINGLE PRODUCT
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { $inc: { views: 0.5 } },
        { new: true });;
      if (product) {
        const restaurant = await Restaurant.findById(product.restaurant_id);

        res.json({
          ...product.toObject(),
          restaurantName: restaurant?.name || '',
        });
      } else {
        res.status(404);
        throw new Error("Product not Found");
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  })
);

// GET ALL PRODUCT BY CATEGORYID
productRoute.get(
  "/category-id/:categoryId",
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const categoryId = req.params.categoryId;
    const keyword = req.query.keyword
      ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ categories_id: categoryId })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

productRoute.get(
  "/recomment/:categoryId",
  asyncHandler(async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const limit = 4;
      const productsInCategory = await Product.find({ categories_id: categoryId }).limit(limit);

      let finalProducts = [...productsInCategory];

      if (productsInCategory.length < limit) {
        const remaining = limit - productsInCategory.length;
        const excludedIds = productsInCategory.map(p => p._id);

        const randomProducts = await Product.aggregate([
          { $match: { _id: { $nin: excludedIds } } },
          { $sample: { size: remaining } },
        ]);

        finalProducts = finalProducts.concat(randomProducts);
      }

      res.json({ products: finalProducts });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
);

// GET ALL PRODUCT BY RESTAURANT
productRoute.get(
  "/menu-id/:menuId",
  asyncHandler(async (req, res) => {
    const pageSize = 8;
    const page = Number(req.query.pageNumber) || 1;
    const menuId = req.params.menuId;

    const count = await Product.countDocuments({ restaurant_id: menuId });
    const products = await Product.find({ restaurant_id: menuId })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });

    const topRatedProducts = await Product.find({ restaurant_id: menuId })
      .sort({ rating: -1 })
      .limit(4);

    res.json({
      products,
      topRated: topRatedProducts,
      page,
      pages: Math.ceil(count / pageSize)
    });
  })
);

// PRODUCT REVIEW
productRoute.post(
  "/:id/review",
  protect,
  asyncHandler(async (req, res) => {
    const { rating, comment } = req.body.payload;
    const product = await Product.findById(req.params.id);
    const user_name = req.user.last_name + " " + req.user.first_name;

    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already Reviewed");
      }
      const review = {
        name: user_name,
        image: req.user.avatar,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
      product.reviews.push(review);
      product.num_reviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ reviews: product.reviews, rating: product.rating });
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// DELETE PRODUCT
productRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Product deleted" });
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// CREATE PRODUCT
productRoute.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const { name, categories_id, restaurant_id, description, price, unit } =
      req.body;
    const image = req.file?.path;
    const product = new Product({
      name,
      image,
      categories_id,
      restaurant_id,
      description,
      price,
      unit,
      user: req.user._id,
    });
    if (product) {
      const createdproduct = await product.save();
      res.status(201).json(createdproduct);
    } else {
      res.status(400);
      throw new Error("Invalid product data");
    }
  })
);

// UPDATE PRODUCT
productRoute.put(
  "/:id",
  protect,
  admin,
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const { name, categories_id, restaurant_id, description, price, unit } =
      req.body;
    const image = req.file?.path;
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = name || product.name;
      product.image = image || product.image;
      product.categories_id = categories_id || product.categories_id;
      product.restaurant_id = restaurant_id || product.restaurant_id;
      product.description = description || product.description;
      product.price = price || product.price;
      product.unit = unit || product.unit;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default productRoute;
