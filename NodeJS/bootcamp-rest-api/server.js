const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

//Route Files
const bootcamps = require("./routes/bootcamps");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//Connect to database
connectDB();

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} ! & Mode ${process.env.NODE_ENV}`);
});
