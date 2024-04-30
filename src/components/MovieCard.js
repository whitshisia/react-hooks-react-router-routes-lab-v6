import {Link} from 'react-router-dom';

function MovieCard({movies}) {
  
  return (
    <article>
        <h2>{movies.title}</h2>
        <Link
        to={`/title/${movies.id}`}>View movies
        </Link>
    </article>
  );
};

export default MovieCard;