import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import DetailsBanner from "../components/DetailsBanner";
import PlaceCard from "../components/PlaceCard";
import Footer from "../components/Footer";
import getImage from "../services/placesService";
import "../assets/styles/Home.scss";
import "../assets/styles/DetailsPage.scss";

function Details() {
  const { placeName } = useParams();
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState({});
  const [relatedPlaces, setRelatedPlaces] = useState([]);
  const [celcius, setCelcius] = useState(0);
  let relatedPlacesList = [];
  useEffect(() => {
    //weather api end point
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=db224014a65b48d987f181930231404&q=${placeName}&days=1&aqi=no&alerts=yes`
      )
      .then((response) => {
        setCelcius(response.data.current.temp_c);
      });
    //all places end point
    axios
      .get("https://nijin-server.vercel.app/api/explorer")
      .then((response) => {
        setPlaces(response.data);
      });
    //specific place endpoint
    axios
      .get(`https://nijin-server.vercel.app/api/explorer/places/${placeName}`)
      .then((response) => {
        setPlace(response.data);
      });
    //related place endpoint
    axios
      .get(
        `https://nijin-server.vercel.app/api/explorer/places/related/${placeName}`
      )
      .then((response) => {
        setRelatedPlaces(response.data);
      });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [placeName]);

  return (
    <div>
      <Header />
      <DetailsBanner
        place={place}
        celcius={celcius}
        placeImg={getImage(place.city)}
      />
      {places.forEach((place) => {
        if (relatedPlaces.includes(place.city)) {
          relatedPlacesList.push(place);
        }
      })}
      <p className="full-description-txt">{place.fullDescription}</p>
      <div className="destination-txt-wrapper">
        <h1>Similar Destinations</h1>
        <h2>Because you liked {place.city}</h2>
      </div>
      <div className="places-container">
        {relatedPlacesList.map((place) => {
          return (
            <PlaceCard
              src={getImage(place.city)}
              place={place.place}
              city={place.city}
              shortDescription={place.shortDescription}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Details;
