import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="h-[70px] bg-[#121123] w-full flex justify-center items-center">
            <Link className="text-xl font-semibold text-white" to="/">
                Tra cứu thần số học
            </Link>
        </div>
    )
}

export default Header
