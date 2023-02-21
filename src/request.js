const API_KEY="eb239966961694b46d735e445ec47b77";

 const request={
    trend:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    original:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US `,
    actionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28 `,
    comedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35 `,
    horrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27 `,
    romanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749 `,
    documantaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99 `
}
export default request;
//  `https://api.themoviedb.org/3/  api_key=${API_KEY} `
