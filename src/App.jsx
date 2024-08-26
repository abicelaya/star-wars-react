import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListShips from "./pages/ListShips/ListShips";
import Header from "./components/Header/Header";
import ShipDetail from "./pages/ShipDetail/ShipDetail";
import { ShipProvider } from "./context/ShipContext";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <ShipProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/starships" element={<ListShips />} />
              <Route path="/starships/:id" element={<ShipDetail />} />
            </Routes>
          </ShipProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
