import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const Layout = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? (
                <Loader duration={5000} onComplete={() => setLoading(false)} />
            ) : (
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Layout;