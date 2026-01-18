import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connectDB.js";
dotenv.config();

const PORT = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Running On Port: ${PORT}`);
        });
    })
    .catch((err) => console.log(err));

// (async () => {
//     try {
//         await mongoose.connect(process.env.MONGDB_URL);
//         console.log("Database connected successfully.");
//         app.on("error : ", (error) => {
//             console.log("ERROR :", error);
//             throw error;
//         });
//         app.listen(PORT, () => {
//             console.log(`Server is Running On Port :${PORT}`);
//         });
//     } catch (error) {
//         console.log("ERROR :", error);
//         throw error;
//     }
// })();
