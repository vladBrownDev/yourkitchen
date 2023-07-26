import "./globals.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header(props: { setSearch: (str: string) => void }) {
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
        <NavLink
          to={"search"}
          onClick={() => {
            props.setSearch(inputValue);
          }}
          id="searchBtn"
        >

        </NavLink>
      </form>
    </header>
  );
}

export default Header;
