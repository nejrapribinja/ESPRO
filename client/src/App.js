import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import AllPosts from "./components/userPrivate/AllPosts";
import AddPost from "./components/userPrivate/AddPost";
import EditPost from "./components/userPrivate/EditPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/allPosts" element={<AllPosts />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/editPost" element={<EditPost />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
