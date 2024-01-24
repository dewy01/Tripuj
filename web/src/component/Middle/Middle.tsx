import './MiddleStyles.css';


const Middle = () => {
    return (
        <>
        <div className="middle section">
            <div className="secContainer container">
                <div className="grid">
                    <span className="flex">
                        <h1>10</h1>
                        <p>Punktów obsługi</p>
                    </span>

                    <span className="flex">
                        <h1>2k+</h1>
                        <p>Ciekawych miejsc</p>
                    </span>

                    <span className="flex">
                        <h1>10k+</h1>
                        <p>Pozytywnych opinii</p>
                    </span>

                    <span className="flex">
                        <h1>4.8</h1>
                        <p>Ocena klientów</p>
                    </span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Middle;