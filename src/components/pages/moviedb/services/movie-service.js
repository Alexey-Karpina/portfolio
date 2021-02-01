import axios from "axios";

export default class MovieService {
    _apiBase = 'https://api.themoviedb.org/3/';
    api_key = "f8fd05182259f8fe6be2df5d32ae2b3e";

    async getResourse(url){
        const res = await axios.get(`${this._apiBase}${url}`);
        const body = await res.data;
        return body;
    }
    getTrendingMovies(){
        return this.getResourse(`trending/movie/week?api_key=${this.api_key}`);
    }
    searchMovies(query){
        return this.getResourse(`search/movie/week?api_key=${this.api_key}&query=${query}`);
    }
    getMovieDetails(id){
        return this.getResourse(`movie/${id}?api_key=${this.api_key}`);
    }
    getMovieCredits(id){
        return this.getResourse(`movie/${id}/credits?api_key=${this.api_key}`);
    }
    getMovieReviews(id){
        return this.getResourse(`movie/${id}/reviews?api_key=${this.api_key}`);
    }
    getMoviePoster(path){
        return `https://image.tmdb.org/t/p/w500/${path}`;
    }
}