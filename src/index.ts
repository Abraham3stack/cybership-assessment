import express from "express";
import dotenv from "dotenv";
import { getRates } from "./controllers/rateController";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

app.post("/rates", getRates);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});