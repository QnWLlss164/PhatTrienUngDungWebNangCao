import React, { useEffect, useState, useContext } from 'react'
import classes from './User.module.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { UserAPI } from '../../api/userAPI'
import UserItem from '../../components/UserItem/UserItem'
import { useSearchParams } from "react-router-dom";
import Pagination from '../../components/Pagination/Pagination'
import EditUser from '../../components/Pages/Users/EditUser'
import CreateUserModal from '../../components/Pages/Users/CreateUser'
import { LoaderContext } from '../../hooks/LoaderContext'
import { useToast } from '../../hooks/ToastContext'

export default function User() {
    const { setLoading } = useContext(LoaderContext)
    const token = localStorage.getItem("token");
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10);
    const [keyword, setKeyword] = useState("");
    const [status, setStatus] = useState("all");
    const [editingUser, setEditingUser] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const { showToast } = useToast();

    useEffect(() => {
        const page = Number(searchParams.get("page")) || 1;
        setCurrentPage(page);
    }, [searchParams]);

    useEffect(() => {
        const query = {
            pageNumber: currentPage,
            limit,
            keyword,
            status
        };
        UserAPI.getAll(token, query, (err, data) => {
            if (err) {
                setError(err.message)
            } else {
                setUsers(data.users)
                setTotalPages(data.pages)
            }
        })
    }, [currentPage, limit, keyword, status])

    const handleSaveUser = (updatedUser) => {
        setEditingUser(null);
        setLoading(true)
        UserAPI.updateUser(token, updatedUser._id, updatedUser.payload, (err, res) => {
            if (err) {
                console.error("Lỗi khi cập nhật người dùng:", err.message);
            } else {
                setUsers(prevUsers =>
                    prevUsers.map(u => u._id === res._id ? res : u)
                );
                showToast("cập nhật thông tin thành công")
            }
            setLoading(false)
        });
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleShowCreateModal = () => {
        setShowCreateModal(true)
    }
    const handleCreateUser = (formData) => {
        setLoading(true)
        UserAPI.createUser(token, formData, (err, res) => {
            if (err) {
                console.error("Lỗi khi tạo người dùng:", err.message);
                showToast("tạo người dùng thất bại");
            } else {
                setUsers(prev => [res.user, ...prev]);
                showToast("tạo người dùng thành công");
            }
            setLoading(false)
        });
    }

    const handleSoftDeleteUser = (userId) => {
        setLoading(true);
        const payload = {
            status: false
        };
        UserAPI.updateUser(token, userId, payload, (err, res) => {
            if (err) {
                console.error("Lỗi khi vô hiệu hóa người dùng:", err.message);
                showToast("Vô hiệu hóa người dùng thất bại");
            } else {
                setUsers(prevUsers =>
                    prevUsers.map(u => u._id === res._id ? res : u)
                );
                showToast("Đã vô hiệu hóa người dùng");
            }
            setLoading(false);
        });
    };


    const handleCloseModal = () => {
        setEditingUser(null);
    };

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setSearchParams({ page });
        }
    };
    return (
        <div>
            <div className={classes.head}>

                <h1>
                    QUẢN LÝ NGƯỜI DÙNG
                </h1>
                <Button onClick={handleShowCreateModal}>Tạo mới</Button>
            </div>
            <div className={classes.container}>
                <div className={classes.ctn_head}>
                    <Input value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className={classes.inp}
                        type='text'
                        placeholder='Tìm kiếm người dùng' />
                    <div>
                        <div className={classes.combo_box_container}>
                            <div className={classes.combobox}>
                                <select
                                    className={classes.custom_select}
                                    value={limit}
                                    onChange={(e) => setLimit(Number(e.target.value))}
                                >
                                    <option value="10">Hiển thị 10</option>
                                    <option value="20">Hiển thị 20</option>
                                    <option value="50">Hiển thị 50</option>
                                    <option value="100">Hiển thị 100</option>
                                </select>
                            </div>
                            <div className={classes.combobox}>
                                <select
                                    className={classes.custom_select}
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="all">Tình trạng: Tất cả</option>
                                    <option value="active">Đang hoạt động</option>
                                    <option value="inactive">Không hoạt động</option>
                                </select>
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>

                </div>
                <div className={classes.ctn_foo}>
                    {users.map(e => <UserItem key={e._id} data={e} onEdit={handleEdit} onDelete={handleSoftDeleteUser} />)}
                </div>
                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
            {editingUser && (
                <EditUser
                    user={editingUser}
                    onClose={handleCloseModal}
                    onSave={handleSaveUser}
                />
            )}

            {showCreateModal && (
                <CreateUserModal
                    onClose={() => setShowCreateModal(false)}
                    onCreate={handleCreateUser}
                />
            )}
        </div>
    )
}
