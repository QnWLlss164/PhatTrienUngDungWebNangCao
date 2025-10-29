import React, { useContext, useEffect, useState } from 'react'
import { PostAPI } from '../../apis/postAPI';
import { useParams } from 'react-router-dom';
import { LoaderContext } from '../../hook/LoaderContext';
import DataError from '../../components/common/error/DataError';
import ListEmtry from '../../components/common/error/ListEmtry';
import classes from './BlogDetail.module.css'
import RichTextViewer from '../../components/common/RichTextViewer/RichTextViewer';
import PostItem from '../../components/common/Post/PostItem';

export default function BlogDetail() {
    const { setLoading } = useContext(LoaderContext);
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [recomment, setRecomment] = useState([]);
    useEffect(() => {
        setLoading(true)
        PostAPI.Recomment((err, result) => {
            if (err) {
                setError(err.message);
            } else {
                setRecomment(result.listPost)
                setError(false);
            }

        });
        PostAPI.GetSinglePost(id, (err, data) => {
            if (err)
                setError(err.message)
            else {
                setPost(data)
                setError(false)
            }
            setLoading(false);
        })

    }, [id])
    if (error) return <DataError error={error} />
    if (!post) return <ListEmtry error={"không có dữ liệu post"} />
    return (
        <div className='grid wide'>
            <div style={{
                backgroundImage: `url(${post.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",

            }}
                className={classes.content_image}>
            </div>
            <div>
                <div className={classes.title}>
                    <h1>{post.title}</h1>
                    <div>
                        <p> {new Date(post.createAt ? post.createAt : post.updatedAt).toLocaleDateString('vi-VN')} - {post.author}</p>
                    </div>
                </div>
                <div className={classes.content}>
                    <RichTextViewer html={post.content} />
                </div>
                <div className={classes.recomment}>
                    <h1 className={classes.title_recomment}>
                        Những bài đăng tương tự
                    </h1>
                    {
                        recomment && recomment.length > 0 ?
                            <div className={classes.list_recomment}>
                                {recomment.map((e) => <PostItem key={e._id} data={e} />)}
                            </div> :
                            <ListEmtry error={"Danh sách recoment rỗng"} />
                    }
                </div>
            </div>
        </div>
    )
}
