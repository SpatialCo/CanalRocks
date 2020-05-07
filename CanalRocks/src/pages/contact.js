import React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

export default function Home() {
  return (
    <Layout>
      <Video />
      <h1>I'd love to talk! Email me at the address below</h1>
      <h1>This is a test of the contact page.</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  );
}