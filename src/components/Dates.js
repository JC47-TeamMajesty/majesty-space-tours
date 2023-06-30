import '../styles/Dates.css';
import { Link } from 'react-router-dom';

function Dates({ tourDates, handleDateClick } ) {

    return (
        <section className="dates">
            <div className="wrapper">
                <h2>Departure Dates</h2>
                <h4>Your safety is paramount - all departure dates are free of scheduled near-Earth objects and asteroids.</h4>

                {tourDates.length === 0
                ? <h5 className="noTours">There are no safe departure dates in the next week, please try again later!</h5>
                : <ul className="dateOptions">
                    {tourDates.map((date) =>
                    <li key={date}>
                        <Link to={date}>
                        <button value={date}
                        onClick={handleDateClick}>{date}</button>
                        </Link>
                    </li>
                    )}
                </ul>
                }
            </div>
        </section>
    );
}

export default Dates;
