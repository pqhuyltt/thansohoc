import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-white.png'

const Header = () => {
    return (
        <div className="h-[70px] bg-[#121123] w-full flex">
            <Link
                className="text-2xl m-auto flex items-center font-semibold text-white txt-gradient inline-block"
                to="/"
            >
                <img className="h-6 w-16" src={logo} alt="logo" />
                <span className="ml-3 txt-gradient">Tra cứu thần số học</span>
            </Link>
        </div>
    )
}

export default Header
