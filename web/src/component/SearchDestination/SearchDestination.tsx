import "./SeachDestinationStyles.css";

export const SearchDestination = () => {

return(
    <div className="search-container">
        <div className="search-text">
            <p>EXPLORE NOW</p>
            <h1>Find Your dream destinatin</h1>
            <p>Fill in the fields to find the best spot for you</p>
        </div>
        <div className="search-inputs">
            <input className="search-input" placeholder="Location"></input>
            <input className="search-input" placeholder="Budget"></input>
            <input className="search-input" placeholder="Date"></input>
            <button className="search-button">Search</button>
        </div>
    </div>
);

};

export default SearchDestination;