import "./globals.scss";
import { useState } from "react";

function Header() {
  const [inputValue, setInputValue] = useState("");
  return (
    <header className="mainHeader">
      <div id="headerLogo">YourKitchen</div>
      <form action="">
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Find dish by the name"
        />
        <button id="searchBtn" type="button"></button>
      </form>
    </header>
  );
}

export default Header;
