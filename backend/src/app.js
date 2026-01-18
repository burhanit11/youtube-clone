import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const options = {
    origin: "*",
    credentials: true,
};

// middleware
app.use(cors(options));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Api
app.get("/", (req, res) => {
    res.send("Backend is live! 🎉");
});
export { app };
