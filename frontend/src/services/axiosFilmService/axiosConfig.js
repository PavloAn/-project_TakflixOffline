import axios from "axios";


export const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODUzNWFkYWQ5YWNjZDVhZWVhZmVlMDcwOTBhZDA2ZiIsInN1YiI6IjYxYThiY2E5OWE2NDM1MDA2MmE4YzE3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Piq0kURgcp2JZdsBihjdy3RqwuwtUk7C7weSfTiGVbA'
    }
})