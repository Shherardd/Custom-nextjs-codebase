import React from 'react'
import Footer from '@components/Footer'
import Header from '@components/Header'
/* Path aliases */

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}

export default Layout
