import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import Hero from './Hero'
import Footer from './Footer'
// import img from '../../public/img/img3.jpg'

const images = [
    'https://github.com/cappyhackky/landing-page/blob/main/public/img/img1.jpg',
    './../img/img2.JPG',
    '../../public/img/img3.jpg',
    'https://github.com/cappyhackky/landing-page/blob/main/public/img/img2.jpg',
    'https://github.com/cappyhackky/landing-page/main/public/img/img3.jpg',
    'https://drive.google.com/file/d/1NQzVOgY3mvORz9D6AIXuqj7lAI4nkbgz/view?usp=drive_link',
    'https://drive.google.com/file/d/1NQzVOgY3mvORz9D6AIXuqj7lAI4nkbgz/view?usp=drive_link'
    
  ]
  const data = [
    {
      "description":"Hand Bag",
      "image-url":"../../img/bag.jpg"
    },
    {
      "description":"Jacket",
      "image-url":"../img/jacket.jpg"
    },
    {
      "description":"HP Printer",
      "image-url":"../img/printer.jpg"
    },
    {
      "description":"Teddy",
      "image-url":"../img/teddy.jpg"
    },
    {
      "description":"Denims",
      "image-url":"../img/trouser.jpg"
    },
    {
      "description":"Trouser",
      "image-url":"../img/trouserq.jpg"
    }
    
  ]

const Home = () => {
    return (
        <>
            <NavBar />
            <Carousel images={images} />
            <Hero data={data} />
            <Footer />
        </>
    )
}

export default Home