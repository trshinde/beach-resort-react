import React from 'react'
import Hero from  '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
const Home = () => {
  return (
    <React.Fragment>
    <Hero>
      <Banner title = "luxurious rooms" subtitle="deluxe rooms starting $299">
      <Link to="/rooms" className="btn-primary">
      our rooms
      </Link>
      </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    </React.Fragment>
  )
}

export default Home
