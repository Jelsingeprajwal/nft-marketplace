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
import { ConnectWallet } from "./components";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/create-account" element={<CreateAcc />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/createwallet" element={<CreateWallet />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path="/artistpage" element={<ArtistPage />} />
          <Route path="/nftpage" element={<NFTPage />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
