import axios from './Axios.js'
import requests from './Request.js';

import React, { useEffect, useState } from 'react'
import("./bannerstyles.css");


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]);
            return request;
        }
        fetchData();

    }, [])

    function truncate(string, char_num) {
        return string?.length > char_num ? string.substr(0, char_num - 1) + "...." : string
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>PLay</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(movie?.overview, 300)}</h1>
            </div>

            <div className='banner_fadebottom' />
        </header>


    )
}

export default Banner