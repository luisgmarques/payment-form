const express = require("express");
const app = express();
const cors = require("cors");
const paymentRouter = require("./routes/payment-router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", paymentRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
