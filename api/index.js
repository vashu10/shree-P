const express =require ("express");
const app =express();
const dotenv =require("dotenv")
const mongoose=require("mongoose")
const authRoute =require("./routes/auth")
const userRoute =require("./routes/users")
const postRoute = require("./routes/posts")
const multer =require("multer")
const cors =require('cors'); 
const path = require("path");
dotenv.config();
app.use(express.json());

// mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to DB")).catch((err)=>console.log(err));
 
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000/signup_as_vendor'
})
);
app.listen("5000",()=>{
    console.log("Backend is running")
})