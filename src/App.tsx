import "./globals.scss";
import Header from "./Header";
import Main from "./components/Main/Main";
import Footer from "./Footer";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  async function getData(props: {q: String}) {
    const response = await axios.get(" https://api.edamam.com/api/recipes/v2", {
      params: {
        app_id: "06af1388",
        app_key: "73b44e63ba2ecf3b98e0c3a5d387e558",
        ...props,
        type: "public",
      },
    });
    console.log(response)
    return response
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/helo",
      element: <Footer />,
    },
  ]);
  return (
    <>
      <Header />
      <div className="App">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
