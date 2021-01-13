import React, { forwardRef } from 'react'
import { createUseStyles } from "react-jss"
import { Disqus } from "gatsby-plugin-disqus"
import SubTitle from "./shared/subtitle"

const Feedback = forwardRef(({ onFeedbackJump }, ref) => {
  const classes = useStyles()
  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.content}>
        {/* <div className={classes.bio}> */}
        <SubTitle text= "Reviews" />
        <Disqus
          config={{
            /* Replace PAGE_URL with your post's canonical URL variable */
            url: "http://localhost:8000/",
            /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
            identifier: "thread_mania_main",
            /* Replace PAGE_TITLE with the title of the page */
            title: "thread_mania",
          }}
        />

        {/* © Mubarakah Tapia All Rights Reserved */}
        {/* </div> */}
      </div>
    </div>
  )
})

const useStyles = createUseStyles({
  root: {
    // display: "flex",
    // flexGrow: 1,
    maxWidth: "100%",
        //   width: "80vw",

    // height: "50px",
    // backgroundColor: "grey",
    margin: "auto",
  },
    "@media screen and (min-width: 500px)": {
      root: {
        width: "80vw",
        // margin: "auto",
      },
    },
  content: {
    margin: 20,
    marginBottom: 0,

    // display: "flex",
    // flexFlow: "row",
  },
})

export default Feedback
