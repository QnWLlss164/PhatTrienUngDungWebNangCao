import React, { useState, useRef, useEffect } from 'react'
import classes from './Table.module.css'
export default function Table({ title, content, onEdit, onDelete }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = (id) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    const handleEdit = (e) => {
        onEdit(e)
        setActiveMenu(null)
    }

    const handleDelet = (e) => {
        onDelete(e._id)
        setActiveMenu(null)
    }
    return (
        <div className={classes.table_container}>
            <table className={classes.category_table}>
                <thead>
                    <tr>
                        {
                            title.map((e, i) => (
                                <th key={i}>{e}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {content.map((e) => (
                        <tr key={e._id}>
                            <td>{e._id}</td>
                            <td className={classes.bold_text}>{e.name}</td>
                            <td className={classes.action_cell}>
                                <button onClick={() => toggleMenu(e._id)} className={classes.action_btn}>
                                    ⋮
                                </button>
                                {
                                    activeMenu === e._id && (
                                        <div ref={dropdownRef} className={classes.dropdown}>
                                            <button onClick={() => { handleEdit(e) }}>Sửa</button>
                                            <button onClick={() => { handleDelet(e) }}>Xóa</button>
                                        </div>
                                    )
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
