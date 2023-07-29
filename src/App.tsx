import "./globals.scss";
import Header from "./Header";
import Main from "./components/Main/Main";
import Footer from "./Footer";
import RecieptSearch from "./components/Reciept/RecieptSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchState, setSearchState] = useState("");

  return (
    <BrowserRouter>
      <Header
        setSearch={(str: string) => {
          setSearchState(str);
        }}
      />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<RecieptSearch q={searchState} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
