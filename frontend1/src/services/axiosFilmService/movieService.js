import { AXIOS } from "./axiosConfig";

class MovieService {
    async getMovies() {
        const {data} = await AXIOS.get('/discover/movie')
        return data
    }

    async getMovieDetailsById (movie_id) {
        const {data} = await AXIOS.get(`/movie/${movie_id}`)
        return data
    }
}


export const movieService = new MovieService();