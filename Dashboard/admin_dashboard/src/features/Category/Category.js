import React, { useEffect, useState, useContext } from 'react'
import classes from './Category.module.css'
import Table from '../../components/Table/Table'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import InpImage from '../../components/InpImage/InpImage'
import { CategoryAPI } from '../../api/categorieAPI'
import { LoaderContext } from '../../hooks/LoaderContext'

export default function Category() {
    const { setLoading } = useContext(LoaderContext)
    const token = localStorage.getItem("token");
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const title = [
        "id", "Tên", "Hành động"
    ]
    useEffect(() => {
        setLoading(true)
        CategoryAPI.getAllCategory(token, (err, data) => {
            if (err) {
                setError(err.message)
            } else {
                setCategories(data)
            }
            setLoading(false)
        })
    }, [])

    const handleCreate = () => {
        if (!name || !image) return alert("Vui lòng nhập đầy đủ thông tin.");
        CategoryAPI.createCategory(token, { name, image }, (err, data) => {
            if (!err) {

                alert("tạo thành công")
            }
        });
    };

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
            CategoryAPI.deleteCategory(id, token, (err, data) => {
                if (!err) alert("xóa thành công");
            });
        }
    };

    const handleUpdate = () => {
        CategoryAPI.updateCategory(token, editingId, { name, image }, (err, data) => {
            if (!err) {
                setCategories(...categories, data)
                alert("sửa thành công")
            }
        });
    };
    return (
        <div>
            <h1 className={classes.title}>
                QUẢN LÝ DANH MỤC MÓN ĂN
            </h1>
            <div className={classes.container}>
                <div className={classes.inputbox}>
                    <div>
                        <p>Tên danh mục món ăn</p>
                        <Input className={classes.inp} type="text" placeholder='Gõ tên' />
                    </div>
                    <div>
                        <InpImage />
                        <Button className={classes.btn}>Tạo danh mục</Button>
                    </div>
                </div>

                <div className={classes.table}>
                    <Table content={categories} title={title} onEdit={handleUpdate} onDelete={handleDelete} />
                </div>
            </div>
        </div>
    )
}

