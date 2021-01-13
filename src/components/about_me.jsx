import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { createUseStyles } from "react-jss"
import SubTitle from "./shared/subtitle"
import { Collapse } from "react-bootstrap"

const AboutMe = ({ onCollectionJump, onFeedbackJump }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const classes = useStyles()
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <SubTitle text="About Me" />
        <div className={classes.content2}>
          <div className={classes.bio}>
            <p>
              Hello, Thank you for taking the time to visit. I present to you my
              labour of love- a hobby which brings out my creative best and
              simultaneously helps me relax after a long day at work. Fill your
              senses with{" "}
              <a className={classes.link} onClick={() => onCollectionJump()}>
                highlights of my work
              </a>
              , read the{" "}
              <a className={classes.link} onClick={() => toggle()}>
                juicy bits about how it all started{" "}
              </a>{" "}
              or leave me with a{" "}
              <a className={classes.link} onClick={() => onFeedbackJump()}>
                word of encouragement
              </a>
              .
            </p>
          </div>
          <div className={classes.media}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              style={{ display: "flex", boxShadow: "10px 15px #00293d" }}
            />
          </div>
        </div>
        <a className={classes.link2} onClick={() => toggle()}>
          <SubTitle
            text={`My story: How it all started ${isOpen ? "-" : "+"}`}
          />
        </a>

        <Collapse in={isOpen}>
          <div>
            <p>
              I was taught the basics of sewing, cross stitch, crochet and
              knitting when I was in middle school, but never really put that to
              practical use except for the occasional repair of rips and tears
              in clothing, fixing fallen buttons or re do the trouser hems.
              Subsequently, for the better part of my life, my tryst with the
              needle and thread had more to do with placing surgical sutures on
              human tissues in the setting of the OR and I took great efforts to
              ensure my patients had the least conspicuous surgical scar that
              blended with the surrounding skin tone and texture. 12 years ago,
              whilst preparing for the Canadian Medical Licensing Board exams,
              cross stitch canvasses provided the much needed distraction from
              the routine of reading medical text books and attempting mock
              exams. That marked the start of my midlife passion of needle art.
            </p>
            <p>
              My first few canvases were traditional cross stitch using DMC/
              Anchor cotton floss on a 14 or 18 count canvas. I worked on
              getting the tension right for an even finish as I played with
              extensive palette of colours. As my confidence grew, I continued
              experimenting with different stitches, threads and finally moving
              on to using beads and ribbons to add texture to the final product.
            </p>
            <p>
              What started as a distraction has now became a passion. From
              conceptualization and execution to the finished final canvas
              averages anywhere from 4-6 months. Needle art provides me the much
              needed relaxation and helps me unwind after a physically long and
              a mentally exhausting day at work. It helps channel my creative
              streak, giving an expressive medium to the artist within me.
            </p>
            <p>
              So far, I have shared my completed needle art with just a few
              friends. I have never had any public display of my work. This
              website is an attempt to widely share my passion with friends and
              family around the world. I invite you to browse through each of my
              completed pieces of art. You can expand on the pictures to
              appreciate the intricacies of the stitches used. And then, I
              request you to{" "}
              <a onClick={() => console.log("test")}>leave your reviews</a>-
              your honest suggestions to help me improve upon my work. Thank you
              so much for your valuable time.
            </p>
            <p>
              Finally, I’d also like to thank my son Aliqyan for putting
              together this website- it took a little cajoling to nudge him into
              action, but he rose to the task and delivered much more.
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    flexGrow: 1,
    maxWidth: "100%",
  },
  content: {
    margin: "20px auto",
    width: "80%",
    display: "flex",
    flexFlow: "column",
  },
  content2: {
    justifyContent: "space-around",
    display: "flex",
    flexFlow: "row",
  },

  bio: {
    width: "50%",
  },
  title: {
    fontFamily: "Caveat",
    fontSize: "80px",
    margin: "0",
  },
  link: {
    hover: {
      color: "#0056b3",
      textDecoration: "underline",
    },
  },
  link2: {
    color: "black",
    hover: {
      color: "#0056b3",
      textDecoration: "underline",
    },
  },
  media: {
    display: "flex",
    justifyContent: "center",
  },
  "@media screen and (max-width: 1000px)": {
    content2: {
      display: "flex",
      flexFlow: "column-reverse",
    },
    bio: {
      marginTop: "20px",
      width: "100%",
    },
  },
})

export default AboutMe
