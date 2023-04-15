import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate(props.path)}>
      {props.value}
    </button>
  );
}
