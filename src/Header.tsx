import "./globals.scss";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

function Header(props: { setSearch: (str: string) => void }) {
  const [inputValue, setInputValue] = useState("");
  const btnRef = useRef<HTMLAnchorElement>(null)

  function handleEnter(e: {key: string}) {
    if(e.key === "Enter" && btnRef.current) {
      btnRef.current.click();
    }
  }

  return (
    <header className="mainHeader">
      <div id="headerLogo">
        <NavLink to="/">YourKitchen</NavLink>
      </div>
      <span onKeyDown={(e) => {handleEnter(e)}} id="header__searchWrapper">
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
          ref={btnRef}
        ></NavLink>
      </span>
    </header>
  );
}

export default Header;
