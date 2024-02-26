import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            {/* <Route index element={<Navigate replace to="dashboard" />} /> */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
