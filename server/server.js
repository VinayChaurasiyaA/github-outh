const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const bodyParser = require("body-parser");
const CLIENT_ID = "72b180117905e85cfe9c";
const CLIENT_SECREAT = "55862a82cafa52c6ea24beddeb6b4b229d0a4495";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/getAccessToken", async (req, res) => {
  const code = req.query.code;
  const params =
    "?client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECREAT +
    "&code=" +
    code;
  await fetch("https://github.com/login/oauth/access_token" + params, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then(async (response) => {
      console.log(response);
      return await response.json();
    })
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getUser", async (req, res) => {
  req.get("Authorization"); // here we are getting the headers: which comes with the bearer token
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
