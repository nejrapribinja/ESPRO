import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import PostUserSection from "./components/PostUserSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/posts" element={<PostUserSection />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
