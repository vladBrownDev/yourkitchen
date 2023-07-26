import "./Reciept.scss";
import axios from "axios";
interface Props {
  q?: String;
  diet?: String;
  calories?: String;
  health?: String;
  cusine?: String;
  mealType?: String;
  type?: String;
}

function RecieptSearch(props:{q:String}) {

  async function getData(props: Props) {
    const response = await axios.get(" https://api.edamam.com/api/recipes/v2", {
      params: {
        app_id: "06af1388",
        app_key: "73b44e63ba2ecf3b98e0c3a5d387e558",
        ...props,
        type: "public",
      },
    });
    console.log(response)
    return response;
  }
  const data = getData({ q: props.q});
  console.log(data)
  return (
    <main>

    </main>
  );
}

export default RecieptSearch;
