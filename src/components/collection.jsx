import React, { forwardRef } from "react"
import { createUseStyles } from "react-jss"
import { Carousel } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SubTitle from "./shared/subtitle"

// TODO: Find a better way to do this. Potentially store as a seperate json data file?
const collectionMetaData = {
  image3: {
    title: "Roses are Red",
    description:
      "I enjoyed working on the shading of the leaves and roses to achieve that true to life result.",
  },
  image15: {
    title: "Beautiful Blossoms",
    description:
      "The black and white geometric background helps to bring out the intricacies of the design of each individual flower.",
  },
  image2: {
    title: "Flower Power",
    description:
      "A simple arrangement of flowers in glass jars can convey a powerful image.",
  },
  image5: {
    title: "A String of Crazy Hearts",
    description:
      "This was a fun project using a medley of non congruent colours, stitches and beads.",
  },
  image4: {
    title: "Straight from the heart",
    description: "A glimpse into a warm and beautiful heart. ",
  },
  image11: {
    title: "Smell the Roses ",
    description:
      "Tried an unusual placement of design- roses within a circle in a square frame. ",
  },
  image16: {
    title: "Fall Foliage",
    description:
      "The colours of Fall are a visual delight. Here are Autumn leaves set in an abstract background. ",
  },
  image6: {
    title: "Bloomed Out",
    description:
      "My first attempt at 3-D needle art. The purple flower has a pop up design- zoom in to appreciate it better.",
  },
  image1: {
    title: "Flower Pulse",
    description: "the colourful first blooms of Spring all in DMC floss.",
  },
  image10: {
    title: "Rainbow Bouquet",
    description:
      "The perfect bouquet of flowers- my first experiment using beads, ribbons and textured threads.",
  },
  image14: {
    title: "Fleurs de Paris",
    description:
      "Captures the essence of the colourful storefront of a florist in one of Paris’ alleyway.",
  },
  image9: {
    title: "Rocker by the Window",
    description:
      "Continued using the floral theme in a different perspective and setting.",
  },
  image19: {
    title: "The Flower Pots",
    description:
      "A fun play on traditional flower pots by using a tea set instead.",
  },
  image18: {
    title: "Lovebirds in Floral Paradise",
    description:
      "The warm colour palette provides the perfect camouflage for these lovebirds.",
  },
  image13: {
    title: "Picture Perfect",
    description:
      "Tried to capture the beauty of floral arrangements in window boxes that are so integral to Ontario’s summers.",
  },
  image8: {
    title: "Apple Harvest",
    description:
      "This was a herculean project- a 36 inch x 30 inch canvas with DMC floss. It took over 6 months to complete, but the final result was very satisfying. ",
  },

  image20: {
    title: "Summer Blossoms ",
    description:
      "Where it all started- my first canvas 12 years ago. Simple but stunning.",
  },
  image7: {
    title: "Beauty by Design",
    description:
      "Tried to capture the intricacies of some of our locally grown flowers using an interesting mix of stitches and threads and beads. Zoom in on each of the flowers to appreciate them better.",
  },
  image17: {
    title: "Magic Burst",
    description:
      "A dream arrangement- straight from a flower patch into a basket.",
  },
  image12: {
    title: "A Medley of Colours",
    description:
      "As I moved beyond plain DMC floss, I created this geometric abstract using fancier threads with different textures. This composition uses only continental stitches.",
  },
  image21: {
    title: "LOVE",
    description:
      "Love is a commonly used word - easy to describe but difficult to define. I used ribboned flowers to bring this word to life.",
  },

  image23: {
    title: "Floral Fantasy",
    description:
      "Muted colours- simple floral forms adapted to geometric shapes to create a well balanced picture",
  },
}

const Collection = forwardRef(({ onCollectionJump }, ref) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      lightboxImage: allFile(
        filter: {
          relativePath: { regex: "/image/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
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

  return (
    <div ref={ref} className={classes.root}>
      <div style={{ width: "80%", margin: "auto" }} s>
        <SubTitle text="Collection" />
      </div>
      <Carousel>
        {data.lightboxImage.edges.map((image, index) => (
          <Carousel.Item
            key={image.node.id}
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              height: "90vh",
            }}
          >
            <div
              style={{
                height: "calc(100% - 170px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#c5e0ff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: `min(80vw,${
                    image.node.childImageSharp.fluid.aspectRatio * 60
                  }vh)`,
                }}
              >
                <Img
                  fluid={image.node.childImageSharp.fluid}
                  imgStyle={{ objectFit: "INSIDE" }}
                  loading="eager"
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                />
              </div>
            </div>
            <Carousel.Caption className={classes.caption}>
              <h4>
                {image.node.childImageSharp.fluid.originalName.slice(0, -4) in
                collectionMetaData
                  ? collectionMetaData[
                      image.node.childImageSharp.fluid.originalName.slice(0, -4)
                    ].title
                  : image.node.childImageSharp.fluid.originalName.slice(0, -4)}
              </h4>
              <p>
                {image.node.childImageSharp.fluid.originalName.slice(0, -4) in
                  collectionMetaData &&
                  collectionMetaData[
                    image.node.childImageSharp.fluid.originalName.slice(0, -4)
                  ]?.description}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
})

const useStyles = createUseStyles({
  root: {
    margin: "auto",
    marginBottom: "20px",
    display: "flex",
    flexFlow: "column",
  },
  caption: {
    left: "0%",
    right: "0%",
    padding: "5px",
    position: "relative",
    bottom: "0px",
  },
})

export default Collection
