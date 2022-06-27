const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('input');
const results = document.querySelector('#results');

searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const searchTerm = searchForm.elements.query.value.toLowerCase();
	const movies = await getMovies(searchTerm);
	console.log(movies);
	movies.forEach((movie) => {
		if (movie.show.image) {
			createImage(movie);
		}
	});
	searchInput.value = '';
});

const getMovies = async (query) => {
	try {
		const config = { params: { q: query } };
		const res = await axios.get('https://api.tvmaze.com/search/shows', config);
		return res.data;
	} catch (error) {
		console.log('error: ', error);
	}
};

const createImage = (movie) => {
	const image = document.createElement('img');
	image.src = movie.show.image.medium;
	results.appendChild(image);
};
