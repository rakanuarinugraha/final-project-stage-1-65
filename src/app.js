import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import data from "./data.js";

const app = express();

// Fix __dirname 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static folder
app.use(express.static(path.join(__dirname, "views")));

// View engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "views/partials"));

app.set("view options", { layout: "layouts/main" });

// Route
app.get("/", (req, res) => {
  res.render("pages/home", data);
});

// Server
// if (process.env.NODE_ENV !== 'production') {

//   const PORT = 3000;
//   app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//   });
// };

export default app;