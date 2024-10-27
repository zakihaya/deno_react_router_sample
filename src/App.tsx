import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      ----
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      ----
      <div>
        <LocationInfo />
      </div>
      ----
      <>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user/111">User 111</Link>
          </li>
          <li>
            <Link
              to="/user/123"
              state={{ message: "こんにちは、React Router!" }}
            >
              User 123
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
        <div>
          <NavigateButton />
        </div>
      </>
    </Router>
  );
}

const LocationInfo = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Location</h2>
      <p>path: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
      <p>key: {location.key}</p>
      <p>state: {JSON.stringify(location.state)}</p>
    </div>
  );
};

const NavigateButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={() => navigate("/about")}>
        Go to About
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
};

export default App;
