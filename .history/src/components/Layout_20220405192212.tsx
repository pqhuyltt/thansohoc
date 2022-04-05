import React, { ReactNode, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'

interface ILayout {
    children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return (
        <div>
            <Header />
            <main className="layout pb-[100px]">{children}</main>
        </div>
    )
}

export default Layout
