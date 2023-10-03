import React from 'react'
import HeaderPage from './header'
import Footer from './footer'

const MainLayout = (props) => {
    return (
        <div>
            <HeaderPage />
            <div>{props.children} </div>
            <Footer />
        </div>
    )
}

export default MainLayout