// Real movie data with YouTube trailers
const moviesData = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        genres: ["Sci-Fi", "Thriller", "Action"],
        countries: ["USA"],
        languages: ["en"],
        views: 2500,
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDMNNGceKc06f6XkH0c.jpg",
        trailer: "https://www.youtube.com/embed/YoHD_XwIlNw",
        description: "A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Cobb is offered a chance to have his criminal history erased, as payment for the implantation of another person's idea into a target's mind. As Cobb and his team of specialists begin their work, one of Cobb's inceptions will have unintended consequences that threaten the fabric of their subjective reality."
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama"],
        countries: ["USA"],
        languages: ["en"],
        views: 3100,
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/1hqwGsG0wT4ee4flQJ9dWWNE8FJ.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests, to fight injustice. With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman strives to dismantle the criminal organizations that plague the city. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos by a criminal mastermind known as the Joker."
    },
    {
        id: 3,
        title: "Interstellar",
        year: 2014,
        genres: ["Adventure", "Drama", "Sci-Fi"],
        countries: ["USA"],
        languages: ["en"],
        views: 2800,
        rating: 8.6,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCu244MyJlmO.jpg",
        trailer: "https://www.youtube.com/embed/zSID6AWeSLM",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Nolan's epic sci-fi masterpiece follows Cooper, a former pilot turned farmer, who must leave his family to lead a mission through a wormhole near Saturn in search of a new habitable planet for mankind."
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        genres: ["Crime", "Drama"],
        countries: ["USA"],
        languages: ["en"],
        views: 1900,
        rating: 8.9,
        poster: "https://image.tmdb.org/t/p/w500/dM2w4PZqPHWYvqvERk+3CBaC4type.jpg",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqJDE",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption. Tarantino's iconic film weaves together multiple narratives in a non-linear fashion, creating one of cinema's most quotable and influential works."
    },
    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        genres: ["Drama", "Romance"],
        countries: ["USA"],
        languages: ["en"],
        views: 2200,
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr63UerivEg7DzC.jpg",
        trailer: "https://www.youtube.com/embed/bIlS2UvPRpY",
        description: "The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart. Forrest Gump is a simple man with a low IQ but good intentions, who inadvertently influences several defining historical events in the 20th Century USA."
    },
    {
        id: 6,
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["Drama"],
        countries: ["USA"],
        languages: ["en"],
        views: 2600,
        rating: 9.3,
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1TSiRqSh91DG1sY1RjNcV.jpg",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Andy Dufresne is a banker who is convicted of murdering his wife and her lover, and is sentenced to life imprisonment at Shawshank prison."
    },
    {
        id: 7,
        title: "The Godfather",
        year: 1972,
        genres: ["Crime", "Drama"],
        countries: ["USA"],
        languages: ["en"],
        views: 2400,
        rating: 9.2,
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsU5A1wSdMMVi.jpg",
        trailer: "https://www.youtube.com/embed/UaVTIH8mE6M",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son. The Godfather is an epic tale of crime and power, following the Corleone family as they navigate the dangerous world of organized crime."
    },
    {
        id: 8,
        title: "The Matrix",
        year: 1999,
        genres: ["Action", "Sci-Fi"],
        countries: ["USA"],
        languages: ["en"],
        views: 2300,
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXqfAC.jpg",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
        description: "A computer programmer discovers that reality as he knows it is a simulation created by machines. Neo is offered the choice between a red pill and a blue pill, which will determine whether he learns the truth about the Matrix or remains in blissful ignorance."
    },
    {
        id: 9,
        title: "Avatar",
        year: 2009,
        genres: ["Action", "Adventure", "Fantasy"],
        countries: ["USA"],
        languages: ["en"],
        views: 2900,
        rating: 7.8,
        poster: "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGHj8x3OrgT0yYKeJJ.jpg",
        trailer: "https://www.youtube.com/embed/5PSNL1qE6VQ",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. Avatar is an epic science fiction film that explores themes of environmentalism and imperialism."
    },
    {
        id: 10,
        title: "Titanic",
        year: 1997,
        genres: ["Drama", "Romance"],
        countries: ["USA"],
        languages: ["en"],
        views: 2700,
        rating: 7.8,
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOK.jpg",
        trailer: "https://www.youtube.com/embed/CHYlDqjlpno",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. Titanic is an epic romance and disaster film that tells the story of the ship's tragic sinking."
    },
    {
        id: 11,
        title: "Gladiator",
        year: 2000,
        genres: ["Action", "Adventure", "Drama"],
        countries: ["USA"],
        languages: ["en"],
        views: 2100,
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/P2Z6eFzIGnZMjG9SnPHVKPLYvxO.jpg",
        trailer: "https://www.youtube.com/embed/owK1qxDsel8",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. Gladiator is an epic historical drama that follows Maximus Decimus Meridius as he fights for revenge and redemption."
    },
    {
        id: 12,
        title: "The Lion King",
        year: 1994,
        genres: ["Animation", "Adventure", "Drama"],
        countries: ["USA"],
        languages: ["en"],
        views: 1800,
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmL8IumWrwDyD1H.jpg",
        trailer: "https://www.youtube.com/embed/7TavVZMewpY",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself. The Lion King is an animated epic that tells the story of Simba's journey from a carefree prince to a responsible king."
    },
    // Test cards with different amounts of information
    {
        id: 13,
        title: "A",
        year: 2020,
        genres: ["Drama"],
        countries: ["USA"],
        languages: ["en"],
        views: 100,
        rating: 7.0,
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDMNNGceKc06f6XkH0c.jpg",
        trailer: "https://www.youtube.com/embed/YoHD_XwIlNw",
        description: "Short film"
    },
    {
        id: 14,
        title: "Very Long Movie Title That Should Display Correctly Without Being Cut Off Or Wrapped Incorrectly",
        year: 2021,
        genres: ["Action", "Thriller", "Crime", "Drama", "Adventure", "Fantasy"],
        countries: ["USA", "UK", "France", "Germany", "Japan", "South Korea"],
        languages: ["en"],
        views: 5000,
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/1hqwGsG0wT4ee4flQJ9dWWNE8FJ.jpg",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
        description: "This is a very long description that contains a lot of information about the movie. It should wrap properly and display all the content without any issues. The movie is about a complex story with multiple characters and intricate plot points that make it an interesting watch for audiences of all ages."
    }
];

// State management
let allMovies = [...moviesData];
let filteredMovies = [...moviesData];
let selectedGenres = [];
let selectedLanguages = [];
let selectedCountries = [];
let searchQuery = '';

// DOM Elements
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const genreFilters = document.querySelectorAll('.genre-filter');
const languageFilters = document.querySelectorAll('.language-filter');
const countryFilters = document.querySelectorAll('.country-filter');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const sidebar = document.querySelector('.sidebar');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const homePage = document.getElementById('homePage');
const detailPage = document.getElementById('detailPage');
const backBtn = document.getElementById('backBtn');
const logoLink = document.querySelector('.logo-link');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMovies(filteredMovies);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', handleSearch);

    // Genre filters
    genreFilters.forEach(filter => {
        filter.addEventListener('change', handleGenreFilter);
    });

    // Language filters
    languageFilters.forEach(filter => {
        filter.addEventListener('change', handleLanguageFilter);
    });

    // Country filters
    countryFilters.forEach(filter => {
        filter.addEventListener('change', handleCountryFilter);
    });

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showHomePage();
        });
    });

    // Back button
    backBtn.addEventListener('click', showHomePage);

    // Logo link
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        showHomePage();
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header') && !e.target.closest('.sidebar') && !e.target.closest('.mobile-menu')) {
            mobileMenu.classList.remove('show');
            sidebar.classList.remove('show');
            body.classList.remove('no-scroll');
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mobileMenu.classList.remove('show');
            sidebar.classList.remove('show');
            body.classList.remove('no-scroll');
        }
    });
}

// Show home page
function showHomePage() {
    homePage.style.display = 'block';
    detailPage.style.display = 'none';
    mobileMenu.classList.remove('show');
    sidebar.classList.remove('show');
    body.classList.remove('no-scroll');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show movie detail page
function showMovieDetail(movie) {
    document.getElementById('detailTitle').textContent = movie.title;
    document.getElementById('detailYear').textContent = movie.year;
    document.getElementById('detailCountry').textContent = movie.countries.join(', ');
    document.getElementById('detailLanguage').textContent = movie.languages.includes('en') ? 'English' : 'Other';
    document.getElementById('detailViews').textContent = movie.views.toLocaleString();
    document.getElementById('detailRating').textContent = movie.rating;
    document.getElementById('detailDescription').textContent = movie.description;
    
    // Load YouTube video
    document.getElementById('detailVideo').src = movie.trailer;
    
    const genresList = document.getElementById('detailGenresList');
    genresList.innerHTML = movie.genres
        .map(genre => `<span class="genre-badge">${genre}</span>`)
        .join('');

    // Load recommendations
    loadRecommendations(movie.id);

    homePage.style.display = 'none';
    detailPage.style.display = 'block';
    body.classList.remove('no-scroll');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load recommendations
function loadRecommendations(currentMovieId) {
    const recommendations = allMovies
        .filter(movie => movie.id !== currentMovieId)
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

    const recommendationsGrid = document.getElementById('recommendationsGrid');
    recommendationsGrid.innerHTML = '';

    recommendations.forEach(movie => {
        const card = createMovieCard(movie);
        recommendationsGrid.appendChild(card);
    });
}

// Render movies
function renderMovies(movies) {
    moviesGrid.innerHTML = '';

    if (movies.length === 0) {
        moviesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #666;">Фильмы не найдены</p>';
        return;
    }

    movies.forEach(movie => {
        const card = createMovieCard(movie);
        moviesGrid.appendChild(card);
    });
}

// Create movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const countriesText = movie.countries.join(', ');
    const genresHtml = movie.genres.map(genre => `<span class="genre-badge">${genre}</span>`).join('');
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <div class="movie-genres">
                    ${genresHtml}
                </div>
                <div class="movie-country">
                    <strong>Country:</strong> ${countriesText}
                </div>
                <div class="movie-year">
                    <strong>Year:</strong> ${movie.year}
                </div>
                <div class="movie-views">
                    <i class="fas fa-eye"></i> ${movie.views.toLocaleString()} views
                </div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => showMovieDetail(movie));
    return card;
}

// Filter functions
function handleSearch(e) {
    searchQuery = e.target.value.toLowerCase();
    applyFilters();
}

function handleGenreFilter(e) {
    const value = e.target.value;
    if (e.target.checked) {
        selectedGenres.push(value);
    } else {
        selectedGenres = selectedGenres.filter(g => g !== value);
    }
    applyFilters();
}

function handleLanguageFilter(e) {
    const value = e.target.value;
    if (e.target.checked) {
        selectedLanguages.push(value);
    } else {
        selectedLanguages = selectedLanguages.filter(l => l !== value);
    }
    applyFilters();
}

function handleCountryFilter(e) {
    const value = e.target.value;
    if (e.target.checked) {
        selectedCountries.push(value);
    } else {
        selectedCountries = selectedCountries.filter(c => c !== value);
    }
    applyFilters();
}

// Apply all filters
function applyFilters() {
    filteredMovies = allMovies.filter(movie => {
        // Search filter
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery) ||
                            movie.genres.some(g => g.toLowerCase().includes(searchQuery));

        // Genre filter
        const matchesGenre = selectedGenres.length === 0 ||
                            selectedGenres.some(genre => 
                                movie.genres.some(g => g.toLowerCase().includes(genre.toLowerCase()))
                            );

        // Language filter
        const matchesLanguage = selectedLanguages.length === 0 ||
                               selectedLanguages.some(lang => movie.languages.includes(lang));

        // Country filter
        const countryMap = {
            'ua': 'Ukraine',
            'ru': 'Russia',
            'us': 'USA',
            'uk': 'UK',
            'fr': 'France',
            'de': 'Germany',
            'jp': 'Japan',
            'kr': 'South Korea'
        };

        const matchesCountry = selectedCountries.length === 0 ||
                              selectedCountries.some(country =>
                                  movie.countries.includes(countryMap[country])
                              );

        return matchesSearch && matchesGenre && matchesLanguage && matchesCountry;
    });

    renderMovies(filteredMovies);
}

// Mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
    sidebar.classList.toggle('show');
    body.classList.toggle('no-scroll');
}
