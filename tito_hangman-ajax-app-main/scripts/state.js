let STATE ={
    movie: [],
    movieGuess: [],
    checkedLetters: [],
    attempts: 5,

    reset(movie) {
        this.movie = movie;
        this.movieGuess = movie.replaceAll(/[a-zA-z]/g, "*");
        this.checkedLetters = [];
        this.attempts = 5;
    },
}
