import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ListShips from "./pages/ListShips/ListShips";
import Header from "./components/Header/Header";
import ShipDetail from "./pages/ShipDetail/ShipDetail";
import { ShipProvider } from "./context/ShipContext";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <ShipProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/starships"
                  element={
                    <ProtectedRoute>
                      <ListShips />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/starships/:id"
                  element={
                    <ProtectedRoute>
                      <ShipDetail />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </ShipProvider>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
