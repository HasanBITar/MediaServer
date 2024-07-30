import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Music from "./pages/Music";
import Documents from "./pages/Documents";

import ProtectedRoute from "./store/ProtectedRoute";
import { verifyToken } from "./store/authSlice";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="videos" element={<Videos />} />
            <Route path="images" element={<Images />} />
            <Route path="music" element={<Music />} />
            <Route path="documents" element={<Documents />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// import Random from './random';
// function App() {
//   return (<Random></Random>)
// }

export default App;
