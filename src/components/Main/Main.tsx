import "./main.scss";
import MultiRangeSlider from "../MultiRangeSlider/MultirangeSlider";

function Main() {
  return (
    <main id="selectorMain">
      <h1>Don't know what to cook?</h1>
      <div>Set up preferences and find the dishes by options</div>
      <form id="dishOptions">
        <h2>How many calories?</h2>
        <MultiRangeSlider min={0} max={1000} />
      </form>
    </main>
  );
}

export default Main;
