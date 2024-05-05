import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";
import PlatformOverview from "./pages/PlatformOverview.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/platform-overview" element={<PlatformOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
