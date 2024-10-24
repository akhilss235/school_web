import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../src/components/Dashboard";
import withSideBarLayout from "../src/navbar/Sidebar ";

function App() {
  return (
    <div className="App">
      <>
        <Router>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/Dashboard"
              element={withSideBarLayout(<Dashboard />, true)}
            />

          </Routes>
     
        </Router>
      </>
    </div>
  );
}

export default App;
