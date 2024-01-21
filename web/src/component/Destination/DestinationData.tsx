import "./DestinationStyles.css";

type Props={
    className:string,
    heading:string,
    text:string,
    img1:string,
    img2:string,
}

export const  DestinationData = (props:Props) => {

    return (
      <div className={props.className}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={props.img1}></img>
          <img alt="img" src={props.img2}></img>
        </div>
      </div>
    );
}

export default DestinationData;