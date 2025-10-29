import mongoose from "mongoose";

const postsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        views: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: true,
    }
);

const Posts = mongoose.model("Post", postsSchema);

export default Posts;