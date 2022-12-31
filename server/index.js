import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/clientRoutes.js";
import generalRoutes from "./routes/generalRoutes.js";
import managementRoutes from "./routes/managementRoutes.js";
import salesRoutes from "./routes/salesRoutes.js";

//DATA IMPORTS
// import User from "./models/UserModel.js";
// import Product from "./models/ProductModel.js";
// import ProductStat from "./models/ProductStatModel.js";
// import Transaction from "./models/TransactionModel.js";
// import OverallStat from "./models/OverAllStatModel.js";
// import AffiliateStat from "./models/AffiliateStatModel.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
      //Only Add Data One Time
      // User.insertMany(dataUser);
      // Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
      // Transaction.insertMany(dataTransaction);
      // OverallStat.insertMany(dataOverallStat);
      // AffiliateStat.insertMany(dataAffiliateStat);
    });
  })
  .catch((error) => {
    console.log(error);
  });
