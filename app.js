import express from "express";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "dotenv/config.js";

import error from "./middlewares/error.js";
import index from "./routes/index.js";

const PORT = process.env.DEV_PORT || 1440;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Set whatever template engine you want
app.set("view_engine", "ejs");

// Basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + "/public"));

// You can modify this routing middleware name you want
app.use("/", index);

// Error handling middlewares
app.use(error.error_404);
app.use(error.error_500);

app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));
