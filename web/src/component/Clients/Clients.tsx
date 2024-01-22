
import './ClientsStyles.css'
import photo from '../../assets/10.jpg'


export const Clients = () => {
    const userPhotos = [
        'https://placekitten.com/50/50', 
        'https://placekitten.com/51/51',
        'https://placekitten.com/52/52',
        'https://placekitten.com/53/53',
        'https://placekitten.com/54/54',
      ];

    return(
        <div className='clients-container'>
            <div className='clients-left'>
                <p className='clients-subtitle'>FROM OUR CLIENTS</p>
                <h2>Real travel history from our clients</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lacus in massa sodales tincidunt in quis leo. Nulla blandit malesuada interdum. Aliquam in scelerisque justo. Donec elit augue, malesuada a porttitor et, laoreet elementum quam.</p>
                <div className="static-star-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                    <span key={value} className={'star-filled'}>
                    &#9733;
                    </span>
                ))}
                <p>Rating: 5/5</p>
                </div>
                <div className="user-photos">
                {userPhotos.map((photo, index) => (
                    <div key={index} className="user-photo">
                    <img src={photo} alt={`User ${index + 1}`} />
                    </div>
                ))}
                </div>
            </div>
            <div className="trip-photo">
                <img
                src={photo}
                alt="Trip"
                />
            </div>
        </div>
    );

}

export default Clients;