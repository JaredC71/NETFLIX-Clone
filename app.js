const base_Url = 'https://api.themoviedb.org/3/';
const API_KEY = 'bc1c9a5ab38dd0bb8ab27e7d1ff66895';
const trending_Now_URL = `${base_Url}trending/all/week?api_key=${API_KEY}`;
const netflix_Originals_URL = `${base_Url}discover/tv?api_key=${API_KEY}&with_networks=213`;
const top_Rated_URL = `${base_Url}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const action_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=28discover/movie?api_key=${API_KEY}&with_genres=28`;
const comedy_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=35`;
const horror_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=27`;
const romance_Movies_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=10749`;
const documentaries_URL = `${base_Url}discover/movie?api_key=${API_KEY}&with_genres=99`;
const base_Image_URL = 'https://image.tmdb.org/t/p/original/';
const trendingNowRow = document.getElementById('trendingNowContainer');
const netflixOriginalsRow = document.getElementById('netflixOriginalsRow');
const topRatedRow = document.getElementById('topRatedRow');
const actionMovieRow = document.getElementById('actionMoviesRow');
const comedyMovieRow = document.getElementById('comedyMoviesRow');
const horrorMovieRow = document.getElementById('horrorMoviesRow');
const romanceMovieRow = document.getElementById('romanceMoviesRow');
const documentaryRow = document.getElementById('documentariesRow');
const jumbotron_El = document.getElementById('jumbotron');
const jumbotron_Title = document.getElementById('jumbotron_Title');
const jumbotron_Description = document.getElementById('jumbotron_Description');
//test api connections

function createJumbotron() {
    fetch(netflix_Originals_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let randomIndex = Math.floor(Math.random() * data.results.length - 1);
        jumbotron_El.style.backgroundImage = `url(${base_Image_URL}${data.results[randomIndex].poster_path})`;
        jumbotron_El.style.backgroundPosition = 'center';
        jumbotron_El.style.backgroundSize = 'cover';
        if(data.results[randomIndex].title) {
            jumbotron_Title.textContent = data.results[randomIndex].title;
            
            
        } else if(data.results[randomIndex].name) {
            jumbotron_Title.textContent = data.results[randomIndex].name;
            
            
        } else {
            jumbotron_Title.textContent = data.results[randomIndex].original_title;

        }
        jumbotron_Description.textContent = data.results[randomIndex].overview;
        
        
    })
    
}

function createTrendingNow() {
    fetch(trending_Now_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            movieImage.src = `${base_Image_URL}${movie.poster_path}`;
            trendingNowRow.appendChild(movieImage);
        });
        
    })
}

function createNetflixOriginals() {
    fetch(netflix_Originals_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            if(movie.backdrop_path == null) {
                movieImage.src = `${base_Image_URL}${movie.poster_path}`;
                
                
            } else {
                movieImage.src = `${base_Image_URL}${movie.backdrop_path}`;
                
                
            }
            netflixOriginalsRow.appendChild(movieImage);
        });
        
    })
    
}

function createTopRated() {
    fetch(top_Rated_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            movieImage.src = `${base_Image_URL}${movie.backdrop_path}`;
            topRatedRow.appendChild(movieImage);
        });
        
    })
    
}

function createActionMovies() {
    fetch(action_Movies_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data.results[4]);
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            if(movie.backdrop_path == null) {
                movieImage.src = `${base_Image_URL}${movie.poster_path}`;
                
                
            } else {
                movieImage.src = `${base_Image_URL}${movie.backdrop_path}`;
                
                
            }
            actionMovieRow.appendChild(movieImage);
        });
        
    })
}

function createComedyMovies() {
    fetch(comedy_Movies_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            if(movie.backdrop_path == null) {
                movieImage.src = `${base_Image_URL}${movie.poster_path}`;
                
                
            } else {
                movieImage.src = `${base_Image_URL}${movie.backdrop_path}`;
                
                
            }
            comedyMovieRow.appendChild(movieImage);
        });
        
    })
    
}

function createHorrorMovies() {
    fetch(horror_Movies_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            if(movie.backdrop_path == null) {
                movieImage.src = `${base_Image_URL}${movie.poster_path}`;
                
                
            } else {
                movieImage.src = `${base_Image_URL}${movie.backdrop_path}`;
                
                
            }
            horrorMovieRow.appendChild(movieImage);
        });
        
    })
    
}

function createRomanceMovies() {
    fetch(romance_Movies_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            if(movie.backdrop_path == null) {
                movieImage.src = `${base_Image_URL}${movie.poster_path}`;
                
                
            } else {
                movieImage.src = `${base_Image_URL}${movie.backdrop_path}`;
                
                
            }
            romanceMovieRow.appendChild(movieImage);
        });
        
    })
    
}

function createDocumentaries() {
    fetch(documentaries_URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.results.map(movie => {
            let movieImage = document.createElement('img');
            if(movie.backdrop_path == null) {
                movieImage.src = `${base_Image_URL}${movie.poster_path}`;
                
                
            } else {
                movieImage.src = `${base_Image_URL}${movie.backdrop_path}`;
                
                
            }
            documentaryRow.appendChild(movieImage);
        });
        
    })
    
}

function createRows() {
    createJumbotron();
    createTrendingNow();
    createNetflixOriginals();
    createTopRated();
    createActionMovies();
    createComedyMovies();
    createHorrorMovies();
    createRomanceMovies();
    createDocumentaries();
}

createRows();