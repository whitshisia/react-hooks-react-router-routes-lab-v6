import React from "react";
import MovieCard from "../components/MovieCard";
import movies from "../components/MovieCard"
function Home() {
  return (
    <>
      <header>
        <h1>Home Page</h1>
        {/* What component should go here? */}
      </header>
      <main>
      {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
