const ulMovieList = document.querySelector('#movie-list');
const movieFilterList = document.querySelector('#movie-filter-list');
const addEventListenerToRadioButtons = document.getElementsByName('movie-filter');
const addEventListenerToSearchField = document.querySelector("#search-movies");

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
            addMoviesToDOM(movies);
    }
};

const filterMovies = (wordInMovieTitle) => {
    const filteredMovies = movies.filter(movie => movie.Title.includes(wordInMovieTitle));
    addMoviesToDOM(filteredMovies);
};

const filterLatestMovies = () => {
    const filteredLatestMovies = movies.filter(movie => movie.Year >= 2014);
    addMoviesToDOM(filteredLatestMovies);
};

const searchMovies = () => {
    const searchedMovies = movies.filter(movie => movie.Title.toLowerCase().includes(addEventListenerToSearchField.value.toLowerCase()));
    addMoviesToDOM(searchedMovies);
};

addEventListenerToRadioButtons.forEach((radio) => {
    radio.addEventListener('change', function (radioBtn) {
        handleOnChangeEvent(radioBtn);
    });
});

addEventListenerToSearchField.addEventListener('search', searchMovies);