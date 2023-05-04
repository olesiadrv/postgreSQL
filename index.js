const express = require("express");
const app = express();
const router = require("./routers");
const port = 3000;

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log("the server is started");
});
