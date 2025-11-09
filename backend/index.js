import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./utils/db.js";
import router from "./routes/taskRoutes.js";

const app = express();
const port = process.env.PORT || 8001;

app.use(cors());
app.use(express.urlencoded({extended:true})); //parse the post request coming from request body
app.use(express.json()); // accept the json data from frontend

app.use("/api/v1", router)
// connect database
db();
app.listen(port, () => {
  console.log(`Server is running on port ${port}...😉`);
});
