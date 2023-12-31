import React from 'react';
import "./homescreenstyles.css";
import NavBar from '../NavBar';
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';



function HomeScreen() {
    return (
        <div className='homescreenstyles'>
            <NavBar />

            <Banner />

            <Row title="Netflix Originals " fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
            <Row title="Trending  " fetchUrl={requests.fetchTrending} />
            <Row title="Romance " fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Action " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy " fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror " fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />




        </div>
    );
}

export default HomeScreen;