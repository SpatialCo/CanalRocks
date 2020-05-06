import React from "react"

import { Link } from "gatsby"

import containerStyles from "./container.module.css"

export default function Layout({ children }) {
  return (
    <div className={containerStyles.container}>
      <Link to="/index"><h1>Canal Rocks</h1></Link>
      {children}
    </div>
  )
}