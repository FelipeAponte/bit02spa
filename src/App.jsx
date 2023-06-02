import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";

export function App() {
  const[jwtToken, setJwtToken] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-3">Biblioteca de Películas</h1>
          </div>
          <div className="col text-end">
            {jwtToken === ""
            ? <Link to="/login"><span className="badge bg-success mt-3">Login</span></Link>
            : <a href="#!"><span className="badge bg-danger">Logout</span></a>
            }
          </div>
          <hr className="mb-3" />
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">Home</Link>
                <Link to="/movies" className="list-group-item list-group-item-action">Películas</Link>
                <Link to="/genres" className="list-group-item list-group-item-action">Géneros</Link>
                {jwtToken !== "" && 
                  <>
                    <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Agregar Película</Link>
                    <Link to="/admin" className="list-group-item list-group-item-action">Manejar Catálogo</Link>
                    <Link to="graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                  </>
                }
              </div>
            </nav>
          </div>
          <div className="col-md-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
