import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import classes from "./layout.module.css"
import Breadcrumb from "../components/common/Breadcrumb/Breadcrumb";

const withLayout = (WrappedComponent) => {
    return function LayoutWrapper(props) {
        return (
            <>
                <Navbar />
                <main className={classes.layout_container}>
                    <Breadcrumb />
                    <WrappedComponent {...props} />
                </main>
                <Footer />
            </>
        );
    };
};

export default withLayout;