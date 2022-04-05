import React, { ReactNode } from 'react'
import Header from './Header'

interface ILayout {
    children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="layout">{children}</main>
        </div>
    )
}

export default Layout
