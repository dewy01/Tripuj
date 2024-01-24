import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";
import Trip4 from "../../assets/9.jpg";
import Trip5 from "../../assets/2.jpg";
import Trip6 from "../../assets/1.jpg";
import Trip7 from "../../assets/10.jpg";
import Trip8 from "../../assets/11.jpg";



function TripsService() {
  return (
    <div className="trip">
      <h1>Najpopularniejsze wycieczki</h1>
      <div className="tripcard">
        <TripData
          image={Trip7}
          heading="Wycieczka po Indonezji"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <TripData
          image={Trip2}
          heading="Wycieczka po Malezji"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <TripData
          image={Trip3}
          heading="Wycieczka do Singapuru"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
                <TripData
          image={Trip4}
          heading="Wycieczka do USA"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

      </div>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Wycieczka po Indonezji"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <TripData
          image={Trip6}
          heading="Wycieczka po Malezji"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <TripData
          image={Trip5}
          heading="Wycieczka do Singapuru"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
                <TripData
          image={Trip8}
          heading="Wycieczka do USA"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

      </div>
    </div>
  );
}

export default TripsService;