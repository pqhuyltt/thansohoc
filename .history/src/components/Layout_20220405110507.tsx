import React, { ReactNode } from 'react'
import Header from './Header'

interface ILayout {
    children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div>
            <Header />
            <main className="layout pb-[100px]">{children}</main>
        </div>
    )
}

export default Layout
