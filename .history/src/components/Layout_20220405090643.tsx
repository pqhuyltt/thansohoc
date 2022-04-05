import React, { ReactNode } from 'react'

interface ILayout {
    children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default Layout
