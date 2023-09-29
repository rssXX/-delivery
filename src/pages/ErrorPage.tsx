import React from "react"
import { Link } from "react-router-dom"

const ErrorPage: React.FC = () => {

  return (
    <div>
        Такой страницы нету <Link to="/">на Главную</Link>
    </div>
  )
}

export default ErrorPage
