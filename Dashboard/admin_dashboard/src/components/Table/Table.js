import React, { useState } from 'react'
import classes from './Table.module.css'
export default function Table({ title, content, onEdit, onDelete }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (id) => {
        setActiveMenu(activeMenu === id ? null : id);
    };
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
                                        <div className={classes.dropdown}>
                                            <button onClick={() => onEdit(e)}>Sửa</button>
                                            <button onClick={() => onDelete(e._id)}>Xóa</button>
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
