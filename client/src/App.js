import { useEffect } from "react";
import axios from "axios";
import "./App.css";
const CLIENT_ID = "72b180117905e85cfe9c";
const CLIENT_SECREAT = "55862a82cafa52c6ea24beddeb6b4b229d0a4495";
function App() {
  let code;
  useEffect(() => {
    //  because the url that is hit is , loclahost:3000/?code=CLIENT_ID
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get("code");

    console.log(code);
  }, []);
  const onClick = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize/?client_id=" + CLIENT_ID
    );
  };
  const generate = () => {
    axios
      .post(
        `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECREAT}&code=${code}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={onClick}>Login with github</button>
      <button onClick={generate}>generate access token</button>
    </div>
  );
}

export default App;
