import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListShips from "./pages/ListShips/ListShips";
import Header from "./components/Header/Header";
import ShipDetail from "./pages/ShipDetail/ShipDetail";
import { ShipProvider } from "./context/ShipContext";

function App() {
  return (
    <Router>
      <Header />
      <ShipProvider>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/starships" element={<ListShips />} />
          <Route path="/starships/:id" element={<ShipDetail />} />
        </Routes>
      </ShipProvider>
    </Router>
  );
}

export default App;
