const movies = [
	{
	  title: "The Dark Knight",
	  year: 2008,
	  genre: "Action, Crime, Drama",
	  rating: 9.0,
	  image: "https://images.unsplash.com/photo-1611664229821-2f5c9a5aebf3"
	},
	{
	  title: "Inception",
	  year: 2010,
	  genre: "Action, Adventure, Sci-Fi",
	  rating: 8.8,
	  image: "https://images.unsplash.com/photo-1619463703047-5c4a4ab1b202"
	},
	{
	  title: "The Godfather",
	  year: 1972,
	  genre: "Crime, Drama",
	  rating: 9.2,
	  image: "https://images.unsplash.com/photo-1611272620026-7cb50a8da8fe"
	},
  ];
  
  const movieList = document.querySelector(".movie-list");
  movies.forEach(movie => {
	const movieElement = document.createElement("div");
	movieElement.classList.add("movie");
  
	const imageElement = document.createElement("img");
	imageElement.src = movie.image;
	movieElement.appendChild(imageElement);
  
	const detailsElement = document.createElement("div");
	detailsElement.classList.add("details");
  
	const titleElement = document.createElement("h3");
	titleElement.textContent = movie.title;
	detailsElement.appendChild(titleElement);
  
	const yearElement = document.createElement("p");
	yearElement.textContent = `Year: ${movie.year}`;
	detailsElement.appendChild(yearElement);
  
	const genreElement = document.createElement("p");
	genreElement.textContent = `Genre: ${movie.genre}`;
	detailsElement.appendChild(genreElement);
  
	const ratingElement = document.createElement("p");
	ratingElement.textContent = `Rating: ${movie.rating}`;
	detailsElement.appendChild(ratingElement);
  
	movieElement.appendChild(detailsElement);
	movieList.appendChild(movieElement);
  });
  