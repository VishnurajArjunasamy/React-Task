import { useState } from "react";
import Button from "./Button";
import Select from "./DropDown";
import image from "../assets/images/explorer.webp";
export default function Explorer() {
  const [destination, setDestination] = useState("");
  return (
    <div className="explorer-container">
      <div className="promo-container">
        <h2>WELCOME TO EXPLORER</h2>
        <h1>Your Adventure Travel Expert in the SOUTH</h1>
        <Select onChange={(e) => setDestination(e.target.value)} />
        <Button value="EXPLORE" path={`/details/${destination}`} />
      </div>
      <img src={image} alt="promo" />
    </div>
  );
}
