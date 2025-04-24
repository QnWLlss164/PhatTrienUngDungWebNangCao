import React, { useEffect, useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import classes from './Food.module.css'
import FoodItem from '../../components/FoodItem/FoodItem'
import { ProductAPI } from '../../api/productAPI'
import { useSearchParams } from "react-router-dom";
import { LoaderContext } from '../../hooks/LoaderContext'
import Pagination from '../../components/Pagination/Pagination'
import EditFood from '../../components/Pages/Food/EditFood'
import CreateFoodModal from '../../components/Pages/Food/CreateFood'
import { useToast } from '../../hooks/ToastContext'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'

export default function Food() {
    const { setLoading } = useContext(LoaderContext)
    const token = localStorage.getItem("token");
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    const [totalPages, setTotalPages] = useState(1);
    const [editingFood, setEditingFood] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const { showToast } = useToast();
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);
    const [confirmMessage, setConfirmMessage] = useState("");

    useEffect(() => {
        const page = Number(searchParams.get("page")) || 1;
        setCurrentPage(page);
    }, [searchParams]);

    useEffect(() => {
        const query = {
            pageNumber: currentPage,
            keyword,
        };
        ProductAPI.GetAllProduct(token, query, (err, data) => {
            if (err) {
                setError(err.messge)
            } else {
                setProducts(data.products)
                setTotalPages(data.pages)
            }
        })
    }, [currentPage, keyword])

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setSearchParams({ page });
        }
    };

    const handleEdit = (user) => {
        setEditingFood(user);
    };

    const handleShowCreateModal = () => {
        setShowCreateModal(true)
    }
    const handleCreateUser = (formData) => {
        setLoading(true)
        ProductAPI.createFood(token, formData, (err, res) => {
            if (err) {
                console.error("Lỗi khi tạo sẩn phẩm:", err.message);
                showToast("tạo sẩn phẩm thất bại");
            } else {
                setProducts(prev => [res, ...prev]);
                showToast("tạo sẩn phẩm thành công");
            }
            setLoading(false)
        });
    }

    const handleDelete = (foodId) => {
        setConfirmDeleteId(foodId);
        setConfirmMessage("Bạn có chắc muốn xóa món ăn này?");
    };

    const confirmDeleteFood = () => {
        if (!confirmDeleteId) return;
        setLoading(true)
        ProductAPI.deleteFood(token, confirmDeleteId, (err, res) => {
            if (err) {
                showToast("Xóa người dùng thất bại");
            } else {
                setProducts(prevUsers => prevUsers.filter(u => u._id !== confirmDeleteId));
                showToast("Xóa người dùng thành công");
            }
            setLoading(false)
        });
    };

    const handleSaveUser = (updated) => {
        setLoading(true)
        setEditingFood(null);
        ProductAPI.updateFood(token, updated._id, updated.payload, (err, res) => {
            if (err) {
                console.error("Lỗi khi cập nhật món ăn:", err.message);
            } else {
                setProducts(prevUsers =>
                    prevUsers.map(u => u._id === res._id ? res : u)
                );

                showToast("cập nhật thông tin món ăn thành công")
            }
            setLoading(false)
        });
    };

    const handleCloseModal = () => {
        setEditingFood(null);
    };

    return (
        <div>
            <div className={classes.head}>
                <h1>
                    QUẢN LÝ MÓN ĂN
                </h1>
                <Button onClick={handleShowCreateModal}>
                    Tạo mới
                </Button>
            </div>
            <div className={classes.container}>
                <div className={classes.container_head}>
                    <div className={classes.head_ctn}>
                        <Input className={classes.inp} value={keyword} onChange={(e) => setKeyword(e.target.value)} type='text' placeholder='Tìm kiếm món ăn' />
                    </div>
                    <div>
                        {/* <div className={classes.combo_box_container}>
                            
                            <select
                                
                                
                                className={classes.custom_select}
                            >
                                <option value="all">Chọn loại món ăn</option>
                                <option value="20">Food 1</option>
                                <option value="50">Food 2</option>
                                <option value="100">Food 3</option>
                            </select>

                           
                            <select
                               
                                className={classes.custom_select}
                            >
                                <option value="all">Tất cả</option>
                                <option value="active">Mới nhất</option>
                                <option value="inactive">Cũ nhất</option>
                            </select>
                        </div>
                        <div>

                        </div> */}
                    </div>
                </div>
                <div className={classes.container_ctn}>
                    {
                        products.map(e => <FoodItem key={e._id} data={e} onEdit={handleEdit} onDelete={handleDelete} />)
                    }

                </div>
                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
            {editingFood && (
                <EditFood
                    food={editingFood}
                    onClose={handleCloseModal}
                    onSave={handleSaveUser}
                />
            )}

            {showCreateModal && (
                <CreateFoodModal
                    onClose={() => setShowCreateModal(false)}
                    onCreate={handleCreateUser}
                />
            )}

            {confirmDeleteId && (
                <ConfirmModal
                    message={confirmMessage}
                    onConfirm={confirmDeleteFood}
                    onCancel={() => setConfirmDeleteId(null)}
                />
            )}
        </div>
    )
}
