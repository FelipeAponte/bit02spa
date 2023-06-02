import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

export const Movie = () => {
    const [movie, setMovie] = useState({});
    const { catalogo } = useOutletContext();
    let { id } = useParams();

    useEffect(() => {
        setMovie(catalogo[id-1]);
    }, [catalogo, id])

    return (
        <div className="text-center">
            <h2>Película: {movie.nombre}</h2>
            <hr />
            <h4>Director: {movie.director}</h4>
            <h4>Clasificación: {movie.clasificacion}</h4>
            <img src={movie.imagen} className="img-fluid w-50" alt="movie tickets" />
        </div>
    );
}