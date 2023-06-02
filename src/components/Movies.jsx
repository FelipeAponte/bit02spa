import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

export const Movies = () => {
    const [movies, setMovies] = useState([]);

    const { catalogo } = useOutletContext();
    const { setAlertClassName } = useOutletContext();
    const { setAlertMessage } = useOutletContext();

    useEffect( () => {
        setAlertClassName("d-none");
        setAlertMessage("")
        setMovies(catalogo);
    }, []);

    return (
        <>
        <div className="text-center">
            <h2>Películas</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Película</th>
                        <th>Director</th>
                        <th>Clasificación</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                            <Link to={`/movie/${m.id}`}>
                                {m.nombre}
                            </Link>
                            </td>
                            <td>{m.director}</td>
                            <td>{m.clasificacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}