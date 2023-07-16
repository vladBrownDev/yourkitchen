import "./main.scss";
import optionsImg from "../../images/options.svg"
import searchImg from "../../images/search.svg"

function Main() {
  return (
    <main>
        <h1>Pick the option you like:</h1>
        <div id="main__buttonsWrapper">
            <button type="button" id="main__optionsBtn">
                <img src={optionsImg} alt="" />
                <h3>Find something you'd like to cook</h3>
            </button>
            <button type="button" id="main__searchBtn">
                <img src={searchImg} alt="" />
                <h3>Get a reciept by the dish name </h3>
            </button>
        </div>
    </main>
  );
}

export default Main;
