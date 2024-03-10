import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
