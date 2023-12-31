import axios from './Axios'
import React, { useEffect, useState } from 'react'
import "./row.css"

function Row({ title, fetchUrl, isLargeRow = false }) {

    const base_url = "https://image.tmdb.org/t/p/original";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    console.log(movies.fetchUrl)

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters'>
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                key={movie.id}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />

                        )
                )}
            </div>
        </div>
    );
}

export default Row;