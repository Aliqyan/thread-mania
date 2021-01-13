import React, { forwardRef } from "react"
import { createUseStyles } from "react-jss"
import { Disqus } from "gatsby-plugin-disqus"
import SubTitle from "./shared/subtitle"

const Feedback = forwardRef(({ onFeedbackJump }, ref) => {
  const classes = useStyles()
  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.content}>
        <SubTitle text="Reviews" />
        <Disqus
          config={{
            url: "https://aliqyan.github.io/thread-mania",
            identifier: "thread_mania_main",
            title: "thread_mania",
          }}
        />
      </div>
    </div>
  )
})

const useStyles = createUseStyles({
  root: {
    maxWidth: "100%",
    margin: "auto",
  },
  "@media screen and (min-width: 500px)": {
    root: {
      width: "80vw",
    },
  },
  content: {
    margin: 20,
    marginBottom: 0,
  },
})

export default Feedback
