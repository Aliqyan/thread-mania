import React from "react"
import injectSheet from "react-jss"

const HomePage = ({classes}) => {
  return (
    <div className={classes.root}>
    </div>
  )
}

const styles = {
  root: {
    display: "flex",
    flexGrow: 1,
    maxWidth: "100%",
    height: "100vh",
    backgroundColor: "#5F9EA0",
  },
}

export default injectSheet(styles)(HomePage)

