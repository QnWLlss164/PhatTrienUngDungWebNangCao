import express from "express";
import asyncHandler from "express-async-handler";
import {
    admin,
    protect,
} from "../Middleware/AuthMiddleware.js";
import Posts from "../Models/PostModel.js";

const postRoute = express.Router();

//Get all Post
postRoute.get(
    "/",
    asyncHandler(async (req, res) => {
        const pageSize = 12;
        const page = Number(req.query.pageNumber) || 1;
        const count = await Posts.countDocuments({});
        const listPost = await Posts.find({})
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: 1 });
        res.json({ listPost, page, pages: Math.ceil(count / pageSize) });
    })
);

// ADMIN GET ALL Post WITHOUT SEARCH AND PEGINATION
postRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const listPost = await Posts.find({}).sort({ _id: -1 });
        res.json(listPost);
    })
);

postRoute.get(
    "/recomment",
    asyncHandler(async (req, res) => {
        try {
            const randomPost = await Posts.aggregate([
                { $sample: { size: 4 } }
            ]);
            res.json({ listPost: randomPost });
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: err.message });
        }
    })
);
// GET SINGLE Post
postRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const Post = await Posts.findById(req.params.id);
        if (Post) {
            res.json(Post);
        } else {
            res.status(404);
            throw new Error("Post not Found");
        }
    })
);


// DELETE Post
postRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        console.log(req.params.id)
        const Post = await Posts.findById(req.params.id);
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
postRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, image, description } =
            req.body;

        const Post = new Posts({
            name,
            image,
            description,

            user: req.user._id,
        });
        if (Post) {
            const createdPost = await Posts.save();
            res.status(201).json(createdPost);
        } else {
            res.status(400);
            throw new Error("Invalid Post data");
        }
    })
);

// UPDATE POST
postRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { name, image, description } =
            req.body;
        const Post = await Posts.findById(req.params.id);
        if (Post) {
            Post.name = name || Post.name;
            Post.image = image || Post.image;
            Post.description = description || Post.description;


            const updatedPost = await Post.save();
            res.json(updatedPost);
        } else {
            res.status(404);
            throw new Error("Post not found");
        }
    })
);

export default postRoute;
