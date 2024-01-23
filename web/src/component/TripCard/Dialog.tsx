import './DialogStyles.css';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  city: string;
  imageUrl: string;
  price: number;
};

const Dialog = ({ isOpen, onClose, city, imageUrl, price }: DialogProps) => {
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            onClose();
        }
    };
    return(
  <div className={`dialog ${isOpen ? 'open' : ''}`}>
    <div className="dialog-content">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <img src={imageUrl} alt={city} />
      <div className="trip-info">
        <h3>{city}</h3>
        <p>Price: ${price}</p>
      </div>
    </div>
  </div>
  );
};

export default Dialog;
