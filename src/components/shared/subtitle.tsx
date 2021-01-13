import React from "react"
import { createUseStyles } from "react-jss"

const SubTitle = ({text}) => {
  const classes = useStyles()
  return <h2 className={classes.root}>{text}</h2>
}

const useStyles = createUseStyles({
  root: {
    fontFamily: "Nothing You Could Do",
    fontSize: "50px",
    marginTop: "20px",
    // marginT
  },
  "@media screen and (max-width: 400px)": {
    root: {
      fontSize: "40px",
    },
  },
})

export default SubTitle
