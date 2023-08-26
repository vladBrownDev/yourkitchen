import "./main.scss";
import MultiRangeSlider from "../MultiRangeSlider/MultirangeSlider";
import Select from "react-select";

function Main() {
  const dietOptions = [
    { value: "balanced", label: "Balanced" },
    { value: "high-fiber", label: "High-Fiber" },
    { value: "high-protein", label: "High-Protein" },
    { value: "low-carb", label: "Low-Carb" },
    { value: "low-fat", label: "Low-Fat" },
  ];
  const mealOptions = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
    { value: "Snack", label: "Snack" },
    { value: "Teatime", label: "Teatime" },
  ]

  let arr = [[[6]],[1,3],[]]
  var inorderTraversal : any = function(arr: any) {
    let flattened: any = [];
    arr.forEach((el: any) => {
        if(typeof(el) === "number") {
            flattened.push(el)
        }
        if(typeof(el) === "object") {
            flattened = [...flattened,...inorderTraversal(el)]
        }
    })
    console.log(flattened)
    return flattened
  };
  console.log(inorderTraversal(arr))

  return (
    <main id="selectorMain">
      <h1>Don't know what to cook?</h1>
      <div>Set up preferences and find the dishes by options</div>
      <form id="dishOptions">
        <div>
          <h2>How many calories?</h2>
          <MultiRangeSlider min={0} max={1000} />
        </div>
        <div>
          <h2>Meal Type?</h2>
          <Select className="mainSelect" isClearable={true} options={mealOptions} />
        </div>
        <div>
          <h2>Any particular diet?</h2>
          <Select className="mainSelect" isClearable={true} options={dietOptions} />
        </div>
        <div>
          <h2>Any particular diet?</h2>
          <Select className="mainSelect" isClearable={true} options={dietOptions} />
        </div>
        <div>
          <h2>Any particular diet?</h2>
          <Select className="mainSelect" isClearable={true} options={dietOptions} />
        </div>
      </form>
    </main>
  );
}

export default Main;
