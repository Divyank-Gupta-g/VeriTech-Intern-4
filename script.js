// scripts.js
$(document).ready(function() {
    // Fetch trending and recommended movies data from an API
    fetch('https://api.example.com/movies')
        .then(response => response.json())
        .then(data => {
            // Generate movie cards for trending and recommended sections
            generateMovieCards(data.trending, '.trending .movies');
            generateMovieCards(data.recommended, '.recommended .movies');
        });

    // Function to generate movie cards
    function generateMovieCards(movies, target) {
        movies.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.year}</p>
                </div>
            `;
            $(target).append(movieCard);
        });
    }
});