// import React from "react"
// import { createUseStyles } from "react-jss"
// import BackgroundImage from "gatsby-background-image"
// import { useStaticQuery, graphql } from "gatsby"

// const HomePage = () => {
//   const classes = useStyles()
//   const data = useStaticQuery(
//     graphql`
//       query {
//         desktop: file(relativePath: { eq: "backdrop.png" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
//   )

//   // Set ImageData.
//   const imageData = data.desktop.childImageSharp.fluid

//   return (
//     <BackgroundImage
//       className={classes.backgroundImage}
//       fluid={imageData}
//       backgroundColor={`#040e18`}
//     >
//       <div className={classes.header}>
//         <div style={{ display: "flex" }}>
//           <h2 className={classes.title}>Living life one stitch at a time</h2>
//         </div>
//       </div>

//       {/* <h2>Mubarakah's Website </h2> */}
//     </BackgroundImage>
//   )

//   // return <div className={classes.root}></div>
// }

// const useStyles = createUseStyles({
//   root: {
//     display: "flex",
//     flexGrow: 1,
//     maxWidth: "100%",
//     height: "100vh",
//     // backgroundColor: "#5F9EA0",
//   },
//   backgroundImage: {
//     display: "flex",
//     flexGrow: 1,
//     maxWidth: "100%",
//     height: "100vh",
//     backgroundColor: "#5F9EA0",

//     // backgroundPosition: "bottom center",
//     backgroundRepeat: "repeat-y",
//     backgroundSize: "cover",
//     // justifyContent: "center"
//     alignItems: "center",
//     // opacity: [[0.8], "!important"],
//   },
//   header: {
//     width: "100%",
//     // padding: "40px 0px 0px 40px",
//     background: "rgba(0,0,0,0.6)",
//     display: "flex",
//     // alignItems: "flex-end",
//     justifyContent: "center",
//     // flexFlow: "column",
//     // direction: "rtl",
//   },
//   title: {
//     margin: 0,
//     color: "white",
//     textShadow: "4px 4px #000000",
//     fontSize: "80px",
//     fontFamily: "Caveat",
//   },
//   link: {},
// })

// export default HomePage
