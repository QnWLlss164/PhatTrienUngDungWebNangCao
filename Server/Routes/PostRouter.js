import express from "express";
import asyncHandler from "express-async-handler";
import {
    admin,
    owners,
    protect,
} from "../Middleware/AuthMiddleware.js";
import Post from "../Models/PostModel.js";

const PostRoute = express.Router();

//Get all Post
PostRoute.get(
    "/",
    asyncHandler(async (req, res) => {
        const pageSize = 12;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: "i",
                },
            }
            : {};
        const count = await Post.countDocuments({ ...keyword });
        const Posts = await Post.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: 1 });
        res.json({ Posts, count, page, pages: Math.ceil(count / pageSize) });
    })
);

// ADMIN GET ALL Post WITHOUT SEARCH AND PEGINATION
PostRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const Posts = await Post.find({}).sort({ _id: -1 });
        res.json(Posts);
    })
);

// GET SINGLE Post
PostRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const Post = await Post.findById(req.params.id);
        if (Post) {
            res.json(Post);
        } else {
            res.status(404);
            throw new Error("Post not Found");
        }
    })
);

// DELETE Post
PostRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const Post = await Post.findById(req.params.id);
        if (Post) {
            await Post.remove();
            res.json({ message: "Post deleted" });
        } else {
            res.status(404);
            throw new Error("Post not Found");
        }
    })
);

// CREATE Post
PostRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, image, categories_id, menu_id, description, price, unit } =
            req.body;

        const Post = new Post({
            name,
            image,
            categories_id,
            menu_id,
            description,
            price,
            unit,
            user: req.user._id,
        });
        if (Post) {
            const createdPost = await Post.save();
            res.status(201).json(createdPost);
        } else {
            res.status(400);
            throw new Error("Invalid Post data");
        }
    })
);

// UPDATE POST
PostRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, image, categories_id, menu_id, description, price, unit } =
            req.body;
        const Post = await Post.findById(req.params.id);
        if (Post) {
            Post.name = name || Post.name;
            Post.image = image || Post.image;
            Post.categories_id = categories_id || Post.categories_id;
            Post.menu_id = menu_id || Post.menu_id;
            Post.description = description || Post.description;
            Post.price = price || Post.price;
            Post.unit = unit || Post.unit;

            const updatedPost = await Post.save();
            res.json(updatedPost);
        } else {
            res.status(404);
            throw new Error("Post not found");
        }
    })
);

export default PostRoute;
