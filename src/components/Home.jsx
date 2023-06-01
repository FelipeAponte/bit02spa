import Ticket from "./../images/Ticket.png"

export const Home = () => {
    return (
        <>
        <div className="text-center">
            <h2>Encuentra una película para ver esta noche!</h2>
            <hr />
            <img src={Ticket} className="img-fluid w-50" alt="movie tickets" />
        </div>
        </>
    );
}