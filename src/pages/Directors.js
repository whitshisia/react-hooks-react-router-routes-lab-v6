import React from "react";

function Directors(directors) {
  return (
    <>
      <header>

        {/* What component should go here? */}
      </header>
      <main>
      <article>
        <h2>{directors.name}</h2>
        <ul>
          {directors.movies}
        </ul>
      </article>
        {/* Director info here! */}
      </main>
      
    </>
  );
};

export default Directors;
