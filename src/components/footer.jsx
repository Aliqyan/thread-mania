import React from "react"
import { createUseStyles, withTheme } from "react-jss"
import { Disqus } from "gatsby-plugin-disqus"

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        © Mubarakah Tapia All Rights Reserved
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    maxWidth: "100%",
    height: "40px",
    backgroundColor: "#00293d",
    justifyContent: "center",
    allignItems: "center",
  },
  content: {
    margin: "auto",
    color: "#FFFFFF",
    display: "flex",
    flexFlow: "row",
  },
})

export default Footer
