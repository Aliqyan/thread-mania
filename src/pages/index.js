import React, {useRef} from "react"
import HomePage from "../components/home_page"
import AboutMe from "../components/about_me"

import Collection from "../components/collection"

import Feedback from "../components/feedback"

import Footer from "../components/footer"

export default function Home() {
  const collectionRef = useRef()
  const feedbackRef = useRef()
  const handleCollectionClick = () => {
    collectionRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const handleFeedbackClick = () => {
    feedbackRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <HomePage />
      <AboutMe onCollectionJump={handleCollectionClick} onFeedbackJump={handleFeedbackClick}/>
      <Collection ref={collectionRef} onCollectionJump={handleCollectionClick}/>
      <Feedback ref={feedbackRef} onFeedbackJump={handleFeedbackClick}/>
      <Footer />
    </>
  )
}

// 