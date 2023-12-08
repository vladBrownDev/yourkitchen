import "./main.scss";
import MultiRangeSlider from "../MultiRangeSlider/MultirangeSlider";
import Select from "react-select";
interface Props {
  q?: String;
  diet?: String;
  calories?: String;
  health?: String;
  cusine?: String;
  mealType?: String;
  type?: String;
}

function Main({setSearch}:{setSearch: (obj:Props) => void}) {
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
  ];
  const cuisineOptions = [
    { value: "american", label: "American" },
    { value: "asian", label: "Asian" },
    { value: "british", label: "British" },
    { value: "caribbean", label: "Caribbean" },
    { value: "central europe", label: "Central europe" },
    { value: "chinese", label: "Chinese" },
    { value: "eastern europe", label: "Eastern europe" },
    { value: "french", label: "French" },
    { value: "greek", label: "Greek" },
    { value: "indian", label: "Indian" },
    { value: "kosher", label: "Kosher" },
    { value: "japanese", label: "Japanese" },
  ];
  const dishTypeOptions = [
    { value: "alcohol cocktail", label: "Alcohol cocktail" },
    { value: "biscuits and cookies", label: "Biscuits and cookies" },
    { value: "bread", label: "Bread" },
    { value: "cereals", label: "Cereals" },
    { value: "condiments and sauces", label: "Condiments and sauces" },
    { value: "desserts", label: "Cesserts" },
    { value: "drinks", label: "Drinks" },
    { value: "egg", label: "Egg" },
    { value: "ice cream and custard", label: "Ice cream and custard" },
    { value: "pasta", label: "Pasta" },
    { value: "pizza", label: "Pizza" },
    { value: "salad", label: "Salad" },
    { value: "sweets", label: "Sweets" },
  ]

  const selectChange = (value: string, option: string) => {
    let paramObject:any = {}
    paramObject[option as keyof Props] = value
    setSearch(paramObject);
  }

  return (
    <main id="selectorMain">
      <h1>Don't know what to cook?</h1>
      <div>Set up preferences and find the dishes by options</div>
      <form id="dishOptions">
        <div onClick={() => {setSearch({cusine: 'american'})}}>
          <h2>How many calories?</h2>
          <MultiRangeSlider min={0} max={1000} />
        </div>
        <div>
          <h2>Meal Type?</h2>
          <Select onChange={(e) => {if(e) {selectChange(e.value, 'mealType')}}} className="mainSelect" isClearable={true} options={mealOptions} />
        </div>
        <div>
          <h2>Any particular diet?</h2>
          <Select onChange={(e) => {if(e) {selectChange(e.value, 'dietType')}}} className="mainSelect" isClearable={true} options={dietOptions} />
        </div>
        <div>
          <h2>Cuisine?</h2>
          <Select onChange={(e) => {if(e) {selectChange(e.value, 'cuisineType')}}} className="mainSelect" isClearable={true} options={cuisineOptions} />
        </div>
        <div>
          <h2>Dish type?</h2>
          <Select onChange={(e) => {if(e) {selectChange(e.value, 'dishType')}}}  className="mainSelect" isClearable={true} options={dishTypeOptions} />
        </div>
      </form>
    </main>
  );
}

export default Main;
