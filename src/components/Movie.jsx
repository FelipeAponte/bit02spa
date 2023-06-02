import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myMovie = {
            id: 1,
            title: "Highlander",
            release_date: "1986-03-07",
            runTime: 116,
            mpaa_rating: "R",
            description: "Some long description",
        }
        setMovie(myMovie);
    }, [id])

    return (
        <div className="text-center">
            <h2>Película: {movie.title}</h2>
            <hr />
            <p>{movie.description}</p>

        </div>
    );
}