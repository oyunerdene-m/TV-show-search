const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('input');

searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const movies = await getMovies();
	const search = searchInput.value.toLowerCase();
	movies.forEach((movie) => {
		const movieName = movie.name.toLowerCase();
		if (movieName.includes(search)) {
			console.log(movie);
		}
	});
	console.log('helloe');
});

const getMovies = async () => {
	try {
		const res = await axios.get('https://api.tvmaze.com/shows');
		const movies = res.data;
		return movies;
	} catch (error) {
		console.log('error: ', error);
	}
};

const createImage = (movie) => {
	const image = document.createElement('img');
};
