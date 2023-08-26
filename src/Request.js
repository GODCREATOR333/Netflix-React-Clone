const API_KEY = "281fdb57f68d86a7768acc9509ab4184"

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/discover/movie?sort_by=vote_average.desc&api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?with_genres=28&api_key=${API_KEY}`,
    fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
    fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${API_KEY}`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${API_KEY}`,
    fetchDocumentaries: `/discover/movie?with_genres=99&api_key=${API_KEY}`,
};

export default requests;