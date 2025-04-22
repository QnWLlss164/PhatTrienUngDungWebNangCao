import express from "express";
import asyncHandler from "express-async-handler";
import Categories from "../Models/CategoryModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";
import Product from "../Models/ProductModel.js";
const categoriesRoute = express.Router();

// GET ALL CATEEGORIES
categoriesRoute.get(
  "/getSlide",
  asyncHandler(async (req, res) => {
    const categories = await Categories.find({}).limit(10);
    res.json(categories);
  })
);
categoriesRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.pageNumber) || 1;  // Lấy trang hiện tại từ query string, mặc định là trang 1
    const limit = 6;  // Số lượng category mỗi trang
    const skip = (page - 1) * limit;  // Tính toán số lượng document cần bỏ qua

    // Lấy các categories với phân trang
    const categories = await Categories.find({})
      .skip(skip)
      .limit(limit);

    // Lấy tổng số lượng categories để tính số trang
    const totalCategories = await Categories.countDocuments();

    res.json({
      categories,
      totalPages: Math.ceil(totalCategories / limit),  // Tính số trang
      currentPage: page,
    });
  })
);
// ADMIN GET ALL CATEGORIES WITHOUT SEARCH AND PEGINATION
categoriesRoute.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const categories = await Categories.find({}).sort({ _id: -1 });
    res.json(categories);
  })
);

// GET SINGLE CATEGRIES
categoriesRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const category = await Categories.findById(req.params.id);
    if (!category) {
      res.status(404);
      throw new Error("Category not found");
    }
    const page = Number(req.query.pageNumber) || 1;
    const limit = 6;
    const skip = (page - 1) * limit;

    const products = await Product.find({ categories_id: category._id })
      .skip(skip)
      .limit(limit);
    const total = await Product.countDocuments({ categories_id: category._id });
    res.json({
      category,
      products,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  })
);

// DELETE CATEGRIES
categoriesRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const categories = await Categories.findById(req.params.id);
    if (categories) {
      await categories.remove();
      res.json({ message: "Categories deleted" });
    } else {
      res.status(404);
      throw new Error("Categries not Found");
    }
  })
);

// CREATE CATEGRIES
categoriesRoute.post(
  "/",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { name, image } = req.body.payload;
    const categoryExist = await Categories.findOne({ name });
    if (categoryExist) {
      res.status(400);
      throw new Error("Categries name already exist");
    } else {
      const category = new Categories({
        name,
        image,
      });
      if (category) {
        const createdcategory = await category.save();
        res.status(201).json(createdcategory);
      } else {
        res.status(400);
        throw new Error("Invalid category data");
      }
    }
  })
);

// UPDATE CATEGORY
categoriesRoute.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { name, image } = req.body.payload;
    const category = await Categories.findById(req.params.id);
    if (category) {
      category.name = name || category.name;
      category.image = image || product.image;

      const updatedCategory = await category.save();
      res.json(updatedCategory);
    } else {
      res.status(404);
      throw new Error("Category not found");
    }
  })
);

export default categoriesRoute;
