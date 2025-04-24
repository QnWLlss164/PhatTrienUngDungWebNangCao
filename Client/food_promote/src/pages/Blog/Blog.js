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
                        Blog & Câu chuyện ẩm thực
                    </h1>
                    <p>
                        Ngoài hương vị, hãy khám phá nền văn hóa đằng sau mỗi món ăn! Ẩm thực không chỉ là một bữa ăn, mà còn là sự phản ánh của lịch sử, văn hóa và truyền thống. Đọc các bài đăng trên blog mới nhất của chúng tôi có các câu chuyện về ẩm thực, các khuyến nghị theo mùa và các điểm nhấn lễ hội.
                    </p>
                    <SearchBar />
                </div>
            </div>
            <div>
                <h1 className={classes.title}>
                    Danh sách Blog & Câu chuyện ẩm thực
                </h1>
                <PostList />
            </div>

        </div>
    )
}
