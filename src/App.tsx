import "./globals.scss";
import Header from "./Header";
import Main from "./components/Main/Main";
import Footer from "./Footer";
import RecieptSearch from "./components/Reciept/RecieptSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

interface Props {
  q?: String;
  diet?: String;
  calories?: String;
  health?: String;
  cusine?: String;
  mealType?: String;
  type?: String;
}

function App() {
  const [searchState, setSearchState] = useState({});
  useEffect(() => {
    console.log(searchState)
  },)
  const changeFunc = (str: string) => {
    let stateCopy = JSON.parse(JSON.stringify(searchState))
    stateCopy.q = str
    setSearchState(stateCopy);
  }

  const changeOptions = (obj: Props) => {
    let stateCopy = JSON.parse(JSON.stringify(searchState))
    for (const property in obj) {
      stateCopy[property] = obj[property as keyof Props]
    }
    setSearchState(stateCopy);
  }
  return (
    <BrowserRouter>
      <Header
        setSearch={changeFunc}
      />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main setSearch={changeOptions} />}  />
          <Route path="/search" element={<RecieptSearch props={searchState} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
