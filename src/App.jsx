import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListShips from "./pages/ListShips/ListShips";
import Header from "./components/Header/Header";
import ShipDetail from "./pages/ShipDetail/ShipDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/starships" element={<ListShips />} />
        <Route path="/starships/:id" element={<ShipDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
