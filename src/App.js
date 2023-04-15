import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/Home";
import "./assets/styles/App.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route>
            <Route path="details">
              <Route path=":placeName" element={<Details />} />
            </Route>
          </Route>
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
