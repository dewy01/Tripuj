import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Ostatnie wycieczki</h1>
      <p>Odkryj nasze najbardziej popularne wybory</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Wycieczka po Indonezji"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus. In metus vulputate eu scelerisque felis imperdiet proin fermentum."
        />

        <TripData
          image={Trip2}
          heading="Wycieczka po Malezji"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus. In metus vulputate eu scelerisque felis imperdiet proin fermentum."
        />

        <TripData
          image={Trip3}
          heading="Wycieczka do Singapuru"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus. In metus vulputate eu scelerisque felis imperdiet proin fermentum."
        />
      </div>
    </div>
  );
}

export default Trip;