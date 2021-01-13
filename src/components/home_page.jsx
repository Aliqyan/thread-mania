import React from "react"
import { createUseStyles } from "react-jss"
import Header from "../assets/header.svg"
import Particles from "react-particles-js"

const HomePage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Particles
        style={{ position: "absolute", width: "100%", height: "100%" }}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "bottom",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className={classes.content}>
        <div className={classes.headerImg}>
          <Header style={{ width: "100%" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={classes.title}>Living life one stitch at a time</div>
          <div className={classes.title2}>Mubarakah (Muba) Tapia</div>
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: "flex",
    maxWidth: "100%",
    height: "100vh",
    background:
      "linear-gradient(146deg, rgba(103,11,11,1) 0%, rgba(11,83,119,1) 85%)",
  },
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  headerImg: {
    display: "flex",

    maxWidth: "90vw",
  },
  title: {
    display: "flex",

    margin: 0,
    maxWidth: "90vw",
    color: "white",
    fontSize: "60px",
    fontFamily: "Nothing You Could Do",
  },
  title2: {
    color: "white",
    fontSize: "30px",
    fontFamily: "Nothing You Could Do",
  },
  "@media screen and (max-width: 500px)": {
    title: {
      fontSize: "40px",
    },
    title2: {
      fontSize: "20px",
    },
  },
})

export default HomePage
