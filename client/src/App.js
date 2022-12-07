import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
