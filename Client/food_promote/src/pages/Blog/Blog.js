import React, { useState } from 'react'
import classes from './Blog.module.css'
import blog_img from '../../assets/blog.png';
import PostList from "../../components/common/Post/PostList";
import SearchBar from '../../components/common/SearchBar/SearchBar';
export default function Blog() {
    return (
        <div className={`grid wide `}>
            <div className={classes.header}>
                <img src={blog_img} alt="blog" />
                <div>
                    <h1 >
                        Blog & Food Stories
                    </h1>
                    <p>
                        Beyond taste  discover the culture behind every dish!Food is more than just a meal, it’s a reflection of history, culture and traditions. Read our latest blog posts featuring food stories, seasonal recommendations and festival highlights.
                    </p>
                    <SearchBar />
                </div>
            </div>
            <div>
                <h1 className={classes.title}>
                    Blog & Food Stories List
                </h1>
                <PostList />
            </div>

        </div>
    )
}
