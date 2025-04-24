// AdminLayout.jsx
import React, { useState } from 'react';
import Sidebar from './SideBar/Sidebar';
import Navbar from './Navbar/Navbar';
import classes from './Layout.module.css';

export default function Layout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(prev => !prev);
    };

    return (
        <div className={classes.wrapper}>
            <Sidebar collapsed={sidebarCollapsed} />
            <div className={`${classes.container} ${sidebarCollapsed ? classes.collapsed : ''}`}>
                <Navbar collapsed={sidebarCollapsed} onToggleSidebar={toggleSidebar} />
                {children}
            </div>
        </div>
    );
}
