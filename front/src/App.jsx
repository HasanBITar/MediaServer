import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import Videos from "./pages/Videos";
import Images from "./pages/Images";
import Music from "./pages/Music";
import Documents from "./pages/Documents";
import ImageViewer from "./pages/view/images/ImageViewer";

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
          <Route path="documents" element={<Documents />} />
          <Route path="view/images/:id" element={<ImageViewer />} />
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
