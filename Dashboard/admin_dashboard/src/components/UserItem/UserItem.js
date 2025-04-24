import React, { useEffect, useRef, useState } from 'react'
import classes from './UserItem.module.css'
export default function UserItem({ data, onEdit, onDelete }) {
    const { _id, thumb, avatar, role, username, first_name, last_name, status } = data;
    const optionsRef = useRef();
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const toggleOptions = () => {
        setShowOptions(prev => !prev);
    };

    const handleClickOutside = (e) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
            setShowOptions(false);
        }
    };

    const handleEdit = () => {
        onEdit(data);
        setShowOptions(false);
    }

    const handleSoftDelete = () => {
        onDelete(_id); // Gọi hàm xử lý soft delete từ component cha
        setShowOptions(false);
    }

    return (
        <div className={classes.box}>
            <div style={{
                backgroundImage: `url(${thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
                className={classes.bg}></div>
            <div className={classes.container}>
                <div style={{
                    backgroundImage: `url(${avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                    className={classes.avt}
                >
                    <span
                        className={classes.statusDot}

                    >
                        <i style={{ color: status ? 'green' : 'red' }} className="fa-solid fa-circle"></i>
                    </span>
                </div>

                <div className={classes.optionWrapper} ref={optionsRef}>
                    <button className={classes.optionButton} onClick={toggleOptions}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    {showOptions && (
                        <div className={classes.dropdown}>
                            <div onClick={handleEdit}>
                                Sửa
                            </div>
                            <div onClick={handleSoftDelete}>
                                Xóa
                            </div>
                        </div>
                    )}
                </div>
                <div className={classes.content}>
                    <p>{first_name} {last_name}</p>
                    <p>Quyền: <span>{role}</span></p>
                </div>
                {/* <p>
                    {username}
                </p> */}

                {/* <p>
                    Trạng thái: {status ? "Đang hoạt động" : "Không kích hoạt"}
                </p> */}
            </div>
        </div>
    )
}
