import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
//Pages and Components

import Home from "./Components/Home/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
