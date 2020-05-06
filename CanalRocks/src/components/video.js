import React from "react"
import videoStyles from "./video.module.css"

  export default function Video() {
    return (
      <div className={videoStyles.vimeoWrapper}><iframe className={videoStyles.vimeo} src="https://player.vimeo.com/video/390381144?background=1&autoplay=1&loop=1&byline=0&title=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>
    )
  }