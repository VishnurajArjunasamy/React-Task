function DetailsBanner(props) {
  return (
    <div>
      <div className="details-page-banner">
        <div className="text-wrapper">
          <h1>{props.place.city}</h1>
          <p>{props.place.place}</p>
          <h2>
            {props.celcius}
            &deg;C
          </h2>
        </div>
        <img src={props.placeImg} alt={props.place.city} />
      </div>
    </div>
  );
}

export default DetailsBanner;
