import "./HeroStyles.css";

function Hero(props:any) {
  return (
    <div className='container'>
      <div className={props.cName}>
        <img alt="heroimg" src={props.heroimg} />
      </div>

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.heroimg} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;