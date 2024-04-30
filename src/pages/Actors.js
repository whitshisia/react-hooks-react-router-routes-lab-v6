import React from "react";

function Actors(actors) {
  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Actor info here! */}
      </main>
      <article>
        <h2>{actors.name}</h2>
        <ul>
          {actors.movies}
        </ul>
      </article>
    </>
  );
};

export default Actors;
