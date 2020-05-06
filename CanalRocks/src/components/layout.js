import React from "react"
import containerStyles from "./container.module.css"

export default function Layout({ children }) {
  return (
    <div className={containerStyles.container}>
      <h1>Canal Rocks</h1>
      <h1>SpatialCo</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      {children}
    </div>
  )
}