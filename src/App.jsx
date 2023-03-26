import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import {
  HomePage,
  CreateAcc,
  ArtistPage,
  CreateWallet,
  MarketPlace,
  NFTPage,
  RankingsPage,
} from "./pages/index";
function App() {
  return (
    <div className="max-w-[1280px] lg:mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/createwallet" element={<CreateWallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
