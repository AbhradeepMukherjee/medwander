import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Form, Listing } from "./components";
function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          backgroundColor: "#EEEEEE",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-a" element={<Form fType="A" />} />
          <Route path="/form-b" element={<Form fType="B" />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
