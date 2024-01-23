import { useState } from 'react';
import './TripCardStyles.css'
import Dialog from './Dialog';

type Props = {
    city: string;
    imageUrl: string;
    price: number;
    onClick: () => void;
  };
  
  const TripCard = ({ city, imageUrl, price, onClick }: Props) => (
    <div className="trip-card" onClick={onClick}>
      <img src={imageUrl} alt={city} />
      <div className="trip-info">
        <h3>{city}</h3>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
  

const cities = [{
    city: "Munich",
    imageUrl: "https://tinyurl.com/5d9jyu8t",
    price: 125
  },
  {
    city: "New York",
    imageUrl: "https://tinyurl.com/ytuy79b3",
   price: 112
  },
  {
    city: "Berlin",
    imageUrl: "https://tinyurl.com/47srs8na",
   price: 105
  },
  {
    city: "Lagos",
    imageUrl: "https://tinyurl.com/5n8tsw3w",
   price: 213
  },
  {
    city: "London",
    imageUrl: "https://tinyurl.com/5ybt45k5",
   price: 119
  },
  {
    city: "Paris",
    imageUrl: "https://tinyurl.com/yaf6ybn4",
   price: 399
  },]

  type City = {
    city: string;
    imageUrl: string;
    price: number;
  };
  
  const CitiesCards: React.FC = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
  
    const openDialog = (city: City) => {
      setSelectedCity(city);
      setDialogOpen(true);
    };
  
    const closeDialog = () => {
      setDialogOpen(false);
      setSelectedCity(null);
    };
  
    return (
      <div>
        <div className="cities-cards-container">
          {cities.map((city, index) => (
            <TripCard
              key={index}
              {...city}
              onClick={() => openDialog(city)}
            />
          ))}
        </div>
        {selectedCity && (
          <Dialog
            isOpen={dialogOpen}
            onClose={closeDialog}
            {...selectedCity}
          />
        )}
      </div>
    );
  };
  
  export default CitiesCards;
