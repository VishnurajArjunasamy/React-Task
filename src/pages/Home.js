import Header from "../components/Header";
import Explorer from "../components/Explorer";
import PlaceCard from "../components/PlaceCard";
import Footer from "../components/Footer";
import getImage from "../services/placesService";
import axios from "axios";
import { useState, useEffect } from "react";
import "../assets/styles/Home.scss";

export default function Home() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("https://nijin-server.vercel.app/api/explorer")
      .then((response) => {
        setPlaces(response.data);
      });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="Home-container">
      <Header />
      <Explorer />
      <div className="destination-txt-wrapper">
        <h1>Destinations</h1>
        <h2>Just for you. Because you and your bike are special to us!</h2>
      </div>
      <div className="places-container">
        {places.map((city) => {
          return (
            <PlaceCard
              src={getImage(city.city)}
              place={city.place}
              city={city.city}
              shortDescription={city.shortDescription}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
