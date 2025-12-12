export function MovieList({ movies }) {

    return (
        <div className="movieList">
            <table className="movieListTable">
                <thead>
                    <tr className="tableHeader">
                        <th>No.</th>
                        <th>Poster</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {movies && movies.map((movie, index) => (
                        <tr key={movie.imdbID || index} className="tableRow">
                            <td className="movieNumber">{index + 1}</td>
                            <td className="moviePoster">
                                <img src={movie.Poster} alt={movie.Title} />
                            </td>
                            <td className="movieTitle">{movie.Title}</td>
                            <td className="movieType">{movie.Type}</td>
                            <td className="movieYear">{movie.Year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}