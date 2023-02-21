import React from 'react';

import request from '../request';
import Row from '../components/Row';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

const Movie = () => {


    return (
        <div className='app'>
            <Navbar/>
       
            <Banner/>
            <Row title='Trending Movies' fetchurl={request.trend} isLargeRow/>
            <Row title='Originals' fetchurl={request.original}/>
            <Row title='Top Rated Movies' fetchurl={request.topRated}/>
            <Row title='Action Movies' fetchurl={request.actionMovies}/>
            <Row title='Comedy Movies' fetchurl={request.comedyMovies}/>
            <Row title='Horror Movies' fetchurl={request.horrorMovies}/>
            <Row title='Romance Movies' fetchurl={request.romanceMovies}/>
            <Row title='Documentaries Movies' fetchurl={request.documantaries}/>
            <Footer/>
            
        </div>
    );
}

export default Movie;
