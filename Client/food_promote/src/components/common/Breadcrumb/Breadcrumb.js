import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';  // Import CSS module

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div className={`grid wide ${styles.breadcrumbContainer}`}>
            <nav aria-label="breadcrumb">
                <ol className={styles.breadcrumbList}>
                    <li>
                        <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                    </li>
                    {pathnames.map((pathname, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return (
                            <li key={to} className={styles.breadcrumbItem}>
                                <span className={styles.breadcrumbSeparator}> / </span>
                                <Link to={to} className={styles.breadcrumbLink}>
                                    {pathname.replace(/-/g, ' ')}
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
