import React from "react"
import { NavLink } from "react-router-dom"

const Header: React.FC = () => {

  return (
    <header className="header-wrapper">
        <nav className="navigation">
            <NavLink to="/">Главная</NavLink>
        </nav>
    </header>
  )
}

export default Header
