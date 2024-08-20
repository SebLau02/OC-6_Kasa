import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Logo from "../logo"

const Header = () => {
  const [page, setPage] = useState("")
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setPage(0)
        break
      case "/about":
        setPage(1)
        break
      default:
        setPage(0)
    }
  }, [location])

  return (
    <header id="navbar">
      <Logo />

      <nav>
        <Link
          to="/home"
          style={{ textDecoration: page === 0 ? "underline" : "none" }}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: page === 1 ? "underline" : "none" }}
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
