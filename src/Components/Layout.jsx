import React from 'react';
import './Layout.scss';

const Layout = ({children}) => {

    return ( 
        <div className='bg'>
            <h1 className='title'>Szkolenie frontend</h1>
            <div>{children}</div>
        </div>
    )
}

export default Layout;