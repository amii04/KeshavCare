//import app from "./app.js";
//import cloudinary from "cloudinary";

//cloudinary.v2.config({
  //cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //api_key: process.env.CLOUDINARY_API_KEY,
  //api_secret: process.env.CLOUDINARY_API_SECRET,
//});

//app.listen(process.env.PORT || 4000, () => {
  //console.log(`Server listening at port ${process.env.PORT}`);
//});

// gpt code
import { config } from 'dotenv';
import app from './app.js';
import dbConnection from './database/dbConnection.js';
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Load environment variables from custom config file
config({ path: './config/config.env' });

const PORT = process.env.PORT || 4000;

console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
console.log(`PORT: ${PORT}`);

// Connect to the database
dbConnection();

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
