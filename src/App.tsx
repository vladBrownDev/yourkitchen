import "./globals.scss";
import Header from "./Header";
import Main from "./components/Main/Main"
import axios from "axios";

function App() {
  // axios.get(' https://api.edamam.com/api/recipes/v2', {
  //   params: {
  //     app_id: "06af1388",
  //     app_key: "73b44e63ba2ecf3b98e0c3a5d387e558",
  //     health: "kosher",
  //     type: "public"
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });  
  return (
    <>
      <Header />
      <div className="App">
        <Main/>
      </div>
    </>
  );
}

export default App;
