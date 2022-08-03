import express from "express";
import 'dotenv/config';
import cors from "cors"
//import pg from "pg";
import emergencyContactsRouter from "./routes/route.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())
// test route
app.get("/", function (req, res) {
    res.json({
      success: true,
      message: "Test route up and running!",
    });
  });


app.use('/emergency', emergencyContactsRouter)


app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
});

export default app;