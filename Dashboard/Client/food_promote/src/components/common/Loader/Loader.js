// src/components/Loader.jsx
import React, { useContext } from 'react';
import { LoaderContext } from '../../../hook/LoaderContext';
// import logo from '../../../assets/logo.png'
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
