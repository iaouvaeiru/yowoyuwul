import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Navbar />
            <div className='children'>
                {children}
            </div>
            <footer className='footer'>
                <h1>RB & Y</h1>
                <p>created by iaouvaeiru</p>
                <p>Getting GC? Don't queue with us.</p>
            </footer>
        </div>
    );
}

export default Layout;
