import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Music from "./pages/Music";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="videos" element={<Videos />} />
          <Route path="images" element={<Images />} />
          <Route path="music" element={<Music />} />
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
