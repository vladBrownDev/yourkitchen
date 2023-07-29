import "./Reciept.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import RecieptItem from "./RecieptItem";
import Spinner from "../Spinner/Spinner";

interface Props {
  q?: String;
  diet?: String;
  calories?: String;
  health?: String;
  cusine?: String;
  mealType?: String;
  type?: String;
}

type itemsType = {
  recipe: {
    label: string;
    images: {
      REGULAR: {
        url: string;
      };
    };
  };
};

function RecieptSearch(props: { q: String }) {
  const [items, setItems] = useState<itemsType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    async function getData(props: Props) {
      setLoading(true)
      const response = await axios.get(
        " https://api.edamam.com/api/recipes/v2",
        {
          params: {
            app_id: "06af1388",
            app_key: "73b44e63ba2ecf3b98e0c3a5d387e558",
            ...props,
            type: "public",
          },
        }
      ).then((response) => {
        setLoading(false)
        return response
      });
      setItems(response.data.hits);
    }
    getData({ q: props.q });
  }, [props]);
  return (
    <main id="recieptSearch">
      {!isLoading
        ? items.map((el, ind) => (
            <RecieptItem
              title={el.recipe.label}
              url={el.recipe.images.REGULAR.url}
              key={ind}
            />
          ))
        : <Spinner/>}
    </main>
  );
}

export default RecieptSearch;
