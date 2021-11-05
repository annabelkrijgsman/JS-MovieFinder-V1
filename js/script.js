// Get elements
const ulMovieList = document.querySelector('#movie-list');
const movieFilterList = document.querySelector('#movie-filter-list');
const addEventListenerToRadioButtons = document.getElementsByName('movie-filter');
const searchField = document.getElementById("search-movies");

// Create list items for movies
const addMoviesToDOM = (movies) => {
    ulMovieList.innerHTML = '';
    movies.map(movie => {
        const newMovieListItem = document.createElement('li');
        newMovieListItem.setAttribute('class', 'movie-list-item');

        const aTag = document.createElement('a');
        aTag.setAttribute('href', 'https://imdb.com/title/' + movie.imdbID);
        aTag.setAttribute('target', '_blank');

        const moviePoster = document.createElement('img')
        moviePoster.setAttribute('src', movie.Poster);

        ulMovieList.append(newMovieListItem);
        aTag.append(moviePoster);
        newMovieListItem.append(aTag);
    });
};

addMoviesToDOM(movies);

// Handle onChange event on radiobuttons
const handleOnChangeEvent = (radioBtn) => {
    switch (radioBtn.target.value) {
        case 'latest-movies':
            filterLatestMovies();
            break;
        case 'avengers-movies':
            filterMovies('Avengers');
            break;
        case 'x-men-movies':
            filterMovies('X-Men');
            break;
        case 'batman-movies':
            filterMovies('Batman');
            break;
        case 'princess-movies':
            filterMovies('Princess');
            break;
        default:
            console.log('default');
    }
};

// Filter movies by title
const filterMovies = (wordInMovieTitle) => {
    const filteredMovies = movies.filter(movie => movie.Title.includes(wordInMovieTitle));
    addMoviesToDOM(filteredMovies);
};

// Filter movies by year
const filterLatestMovies = () => {
    const filteredLatestMovies = movies.filter(movie => movie.Year >= 2014);
    addMoviesToDOM(filteredLatestMovies);
};

// Search movies
function searchMovies() {
    const searchedMovies = movies.filter(movie => movie.Title.toLowerCase().includes(searchField.value.toLowerCase()));
    addMoviesToDOM(searchedMovies);
}

// Add onChange to all radiobuttons
addEventListenerToRadioButtons.forEach((radio) => {
    radio.addEventListener('change', function (radioBtn) {
        handleOnChangeEvent(radioBtn);
    });
});

// Add onSearch to textfield
searchField.addEventListener('search', searchMovies);