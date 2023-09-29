import React from "react"
import { Outlet } from "react-router-dom"
// import Header from "../components/Header"

const DefaultTemplate: React.FC = () => {

  return (
    <>
      {/* <Header/> */}
      <div className="wrapper">
        <Outlet/>
      </div>
    </>
  )
}

export default DefaultTemplate
