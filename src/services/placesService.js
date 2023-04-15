import pollachi from "../assets/images/pollachi.png";
import thanjavur from "../assets/images/thanjavur.png";
import chidambaram from "../assets/images/chidambaram.png";
import masangudi from "../assets/images/masangudi.png";
import kumbakonam from "../assets/images/kumbakonam.png";
import tirunelveli from "../assets/images/tirunelveli.png";

const images = {
  Pollachi: pollachi,
  Thanjavur: thanjavur,
  Chidambaram: chidambaram,
  Masinagudi: masangudi,
  Kumbakonam: kumbakonam,
  Tirunelveli: tirunelveli,
};

export default function getImage(key) {
  return images[key];
}
