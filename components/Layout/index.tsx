import React from 'react'
/* Path aliases */

const Layout = ({ children }) => {
    return (
        <>
            <header>This is a header</header>
                {children}
            <footer>Footer right there</footer>
        </>
    )
}

export default Layout
