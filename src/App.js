//import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import QuoteDay from "./components/QuoteDay/QuoteDay"
import MagicBall from "./components/MagicBall/MagicBall"
import Randomizer from "./components/Randomizer/Randomizer"
import TrafficLight from "./components/TrafficLight/TrafficLight"
import TrafficLightClass from "./components/TrafficLightClass/TrafficLight"
function App() {
  let quote = "640 Кб должно хватить для любых задач.";
  let author = "Билл Гейтс";
  let max = 100;
  let min = 0;
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navigation">
          <Link className="Link" to="/">Задание 1</Link>
          <Link className="Link" to="/magic_ball">Задание 2</Link>
          <Link className="Link" to="/randomizer">Задание 3</Link>
          <Link className="Link" to="/traffic_light">Задание 4</Link>
          <Link className="Link" to="/traffic_light_class">Задание 5</Link>
        </div>

        <Routes>
          <Route path="/" element={<QuoteDay quote={quote} author={author} />} />
          <Route path="/magic_ball" element={<MagicBall />} />
          <Route path="/randomizer" element={<Randomizer min={min} max={max} />} />
          <Route path="/traffic_light" element={<TrafficLight />} />
          <Route path="/traffic_light_class" element={<TrafficLightClass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
