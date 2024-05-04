import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import endpoints from '../services/movieService'
import Footer from '../components/Footer'
import Packages from '../components/Packages'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (<>
    <Hero/>
    <MovieRow title="Now Playing"  url={endpoints.now_playing}/>
    <MovieRow title="trending"  url={endpoints.trending}/>
    <MovieRow title="comedy"  url={endpoints.comedy}/>
    <MovieRow title="toprated"  url={endpoints.topRated}/>
    <MovieRow title="upcoming"  url={endpoints.upcoming}/>
    <MovieRow title="popular"  url={endpoints.popular}/>
    <Banner/>
    <Packages/>
    <Newsletter/>
    <Footer/>
    
  </>
  )
}

export default Home
