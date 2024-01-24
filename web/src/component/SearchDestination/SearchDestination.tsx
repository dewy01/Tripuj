import "./SeachDestinationStyles.css";

export const SearchDestination = () => {

return(
    <div className="search-container">
        <div className="search-text">
            <p>SZUKAJ TERAZ</p>
            <h1>Odnajdź swoje wymarzone miejsce</h1>
            <p>Uzupełnij formularz i sprawdź naszą ofertę</p>
        </div>
        <div className="search-inputs">
            <input className="search-input" placeholder="Miejsce docelowe"></input>
            <input className="search-input" placeholder="Budżet"></input>
            <input className="search-input" placeholder="Data"></input>
            <button className="search-button">Szukaj</button>
        </div>
    </div>
);

};

export default SearchDestination;