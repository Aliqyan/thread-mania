import React, { useState } from "react"
import { range } from "lodash"
import injectSheet from "react-jss"
import ReactBnbGallery from "react-bnb-gallery"
import "react-bnb-gallery/dist/style.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PHOTOS = range(2, 19).map(i => `/image${i}.png`)

const CollectionPage = ({ classes }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 300, maxWidth: 300, fit: INSIDE) {
                originalName
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allFile.edges[0].node.childImageSharp.fluid)
  return (
    <>
      <ReactBnbGallery
        activePhotoIndex={activePhotoIndex}
        show={isOpen}
        photos={PHOTOS}
        onClose={() => setIsOpen(false)}
        showThumbnails={false}
      />
      <div className={classes.collectionContainer}>
        {data.allFile.edges.map(image => (
          <div
            className={classes.imageContainer}
            onClick={() => {
              console.log("TEST")

              console.log(image.node.childImageSharp.fluid.originalName)
              setIsOpen(true)
              setActivePhotoIndex(
                parseInt(image.node.childImageSharp.fluid.originalName.match(
                  /[0-9]+/g
                )[0] - 2)
              )
            }}
          >
            <Img
              fluid={image.node.childImageSharp.fluid}
              imgStyle={{ objectFit: "OUTSIDE" }}
              style={{
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </>

    // <div>
    //   <h1>Hello There</h1>
    //   <Img fixed={data.file.childImageSharp.fixed} alt="alt-img-tag" />
    // </div>
  )

  return (
    <>
      <ReactBnbGallery
        activePhotoIndex={activePhotoIndex}
        show={isOpen}
        photos={PHOTOS}
        onClose={() => setIsOpen(false)}
        showThumbnails={false}
      />
      <div className={classes.collectionContainer}>
        {range(2, 19).map((num, index) => (
          <div className={classes.imageContainer}>
            <img
              className={classes.test}
              src={`/image${num}.png`}
              onClick={() => {
                setIsOpen(true)
                setActivePhotoIndex(index)
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

const styles = {
  collectionContainer: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1200px",
  },

  imageContainer: {
    display: "flex",
    margin: "50px 50px",
    width: "300px",
    height: "300px",
    /* background-color: #e0e0e0; */
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      transform:
        "scale(1.2)" /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */,
      transitionDuration: "500ms",
    },
  },

  test: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
    width: "auto",
  },
  pls: {
    width: "100%",
  },
}

export default injectSheet(styles)(CollectionPage)
