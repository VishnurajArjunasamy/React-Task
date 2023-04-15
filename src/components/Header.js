import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
      <a href="/hotels">Hotels</a>
      <a href="/bike_rentals">Bike Rentals</a>
      <a href="/restaurant">Restaurant</a>
    </div>
  );
}
