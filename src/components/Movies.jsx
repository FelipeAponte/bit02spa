import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        let moviesList = [
            {
                id: 1,
                title: "Highlander",
                release_date: "1986-03-07",
                runTime: 116,
                mpaa_rating: "R",
                description: "Some long description",
            },
            {
                id: 2,
                title: "Raider of the Lost Ark",
                release_date: "1981-06-12",
                runTime: 115,
                mpaa_rating: "PG-13",
                description: "Some long description",
            },
        ];

        setMovies(moviesList);
    }, []);

    return (
        <>
        <div className="text-center">
            <h2>Películas</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                            <Link to={`/movie/${m.id}`}>
                                {m.title}
                            </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}