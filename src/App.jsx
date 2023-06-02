import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import { catalogo } from "./utils/catalogo";

export function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");

  const navigate = useNavigate();
  const logOut = () => {
    setJwtToken("");
    navigate("/login");
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-3">Biblioteca de Películas</h1>
          </div>
          <div className="col text-end">
            {jwtToken === "" ? (
              <Link to="/login">
                <span className="badge bg-success mt-3">Login</span>
              </Link>
            ) : (
              <a href="#!" onClick={logOut}>
                <span className="badge bg-danger mt-3">Logout</span>
              </a>
            )}
          </div>
          <hr className="mb-3" />
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">
                  Home
                </Link>
                <Link
                  to="/movies"
                  className="list-group-item list-group-item-action"
                >
                  Películas
                </Link>
                {jwtToken !== "" && (
                  <>
                    <Link
                      to="/admin/movie/"
                      className="list-group-item list-group-item-action"
                    >
                      Agregar Película
                    </Link>
                    <Link
                      to="/admin/catalogue"
                      className="list-group-item list-group-item-action"
                    >
                      Manejar Catálogo
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
          <div className="col-md-10">
            <Alert message={alertMessage} className={alertClassName} />
            <Outlet
              context={{
                jwtToken,
                setJwtToken,
                setAlertClassName,
                setAlertMessage,
                catalogo,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
