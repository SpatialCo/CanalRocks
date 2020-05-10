import React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

export default function Home() {
  return (
    <Layout>
      <Video />
      <form method="post" action="#" style={{ width: '48%', }}>
      <label>
        Name
        <input type="text" name="name" id="name" style={{ width: '100%', border: '1px solid #dddddd', }} />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" style={{ width: '100%', border: '1px solid #dddddd', }}/>
      </label>
      <label>
        subject
        <input type="text" name="subject" id="subject" style={{ width: '100%', border: '1px solid #dddddd', }}/>
      </label>
      <label>
        message
        <textarea name="message" id="message" rows="5" style={{ width: '100%', border: '1px solid #dddddd', }}/>
      </label>
      <button type="submit" style={{ width: '100%', border: '1px solid #dddddd', }}>submit</button>
      <input type="reset" value="clear" style={{ width: '100%', border: '1px solid #dddddd', marginTop: '6px',}}/>
    </form>
    </Layout>
  );
}