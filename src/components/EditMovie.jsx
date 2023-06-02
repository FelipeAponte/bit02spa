import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Input from "./form/Input";

export const EditMovie = () => {
  const [nombre, setNombre] = useState("");
  const [director, setDirector] = useState("");
  const [clasificacion, setClasificacion] = useState("");

  const navigate = useNavigate();
  const { jwtToken } = useOutletContext();
  const { catalogo } = useOutletContext();

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
      return;
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("nombre/clasificación", nombre, clasificacion);
    let n = Object.keys(catalogo).length;
    const newMovie = {
        id: n+1,
        nombre: nombre,
        director: director,
        clasificacion: clasificacion
    };

    catalogo.push(newMovie);
  };

  return (
    <>
      <div className="text-center">
        <h2>Agregar Película</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <Input
            title="Nombre"
            type="input"
            className="form-control"
            name="nombre"
            autoComplete="nombre-new"
            onChange={(event) => setNombre(event.target.value)}
          />

        <Input
            title="Director"
            type="input"
            className="form-control"
            name="director"
            autoComplete="director-new"
            onChange={(event) => setDirector(event.target.value)}
          />

          <Input
            title="Clasificacion"
            type="input"
            className="form-control"
            name="clasificacion"
            autoComplete="clasificacion-new"
            onChange={(event) => setClasificacion(event.target.value)}
          />

          <hr />

          <input type="submit" className="btn btn-primary" value="Agregar" />
        </form>
      </div>
    </>
  );
};
