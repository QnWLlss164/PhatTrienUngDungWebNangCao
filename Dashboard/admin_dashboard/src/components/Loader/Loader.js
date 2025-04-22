import React, { useContext } from 'react';
import { LoaderContext } from '../../hooks/LoaderContext';
import './Loader.css';

const Loader = () => {
    const { loading } = useContext(LoaderContext);

    if (!loading) return null;

    return (
        <div className="loader-container">
            {/* <img src={logo} alt='logo' /> */}
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
