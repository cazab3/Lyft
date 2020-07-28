import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config";
import resolvers from "./resolvers";

const app = express();

// Use cors for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "This is a Code_sample" });
});

app.use(bodyParser.json());
app.post("/test", (req, res) => {
  if (Object.values(req.body).length !== 1) {
    res.status(400).send({ error: "Bad Request" });
    throw new Error("Bad Request");
  }

  const { string_to_cut } = req.body;

  res.send({ return_string: resolvers.stringCutted(string_to_cut) });
});

app.listen(config.PORT, () => {
  console.log(
    `Code_Sample server runing in port http://localhost:${config.PORT}`
  );
});
