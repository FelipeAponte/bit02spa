import Ticket from "./../images/Ticket.png";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Encuentra una película para ver esta noche!</h2>
        <hr />
        <Link to="/movies">
          <img src={Ticket} className="img-fluid w-50" alt="movie tickets" />
        </Link>
      </div>
    </>
  );
};
