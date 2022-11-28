import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route element={<PrivateRoutes />}>
        <Route path="/addShop" element={<AddShop />} />
        <Route path="/editShop" element={<MyShop />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}

export default App;
