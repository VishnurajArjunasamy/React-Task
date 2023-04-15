import Button from "./Button";
export default function PlaceCard(props) {
  return (
    <div className="place-card">
      <img src={props.src} alt={props.city} />
      <h1>{props.place}</h1>
      <h3>{props.city}</h3>
      <p>{props.shortDescription}</p>
      <Button value="READ MORE" path={`/details/${props.city.toLowerCase()}`} />
    </div>
  );
}
