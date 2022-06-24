const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('input');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const movies = getMovies();
	const search = searchInput.value;
	console.log(search);
});

const getMovies = async () => {
	const res = await axios.get('https://api.tvmaze.com/shows');
	const movies = res.data;
	return movies;
};
