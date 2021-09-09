import express from "express";
import { connect } from "mongoose";
import { loginRouter } from "./routes/Login";
import { propertyRouter } from "./routes/Property";
import { registerRouter } from "./routes/Register";

async function main(): Promise<void> {
  try {
    await connect("mongodb://localhost:27017/property");
    console.log("Connecting to db...");
  } catch (ex) {
    console.error("Db connectin failed n/", ex);
  }
}

main();

const app = express();
app.use(express.json());

// routes
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/property", propertyRouter);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
