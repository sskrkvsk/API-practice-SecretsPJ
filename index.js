import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

const API_URL = "https://secrets-api.appbrewery.com/random";

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        const secreT = result.data.secret;
        const useR = result.data.username;

        res.render("index.ejs", {
            secret: secreT,
            user: useR,
        });
      } catch (error) {
        res.render("index.ejs", { user: error.response.data });
      }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });