import React from "react"

import { Link } from "gatsby"

import containerStyles from "./container.module.css"

export default function Layout({ children }) {
  return (
    <div className={containerStyles.container}>
      <Link to="../"><h1>home . canalrocks</h1></Link>
      <div style={{ position: 'absolute', bottom: '0', }}>
        <Link to="../about"><h2>About</h2></Link>
        <Link to="../contact"><h2>Contact</h2></Link>
      </div>
      {children}
    </div>
  )
}