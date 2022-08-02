import express from "express";
import 'dotenv/config';
//import pg from "pg";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// test route
app.get("/", function (req, res) {
    res.json({
      success: true,
      message: "Test route up and running!",
    });
  });


//come from routes.js  
//app.use("/", router);


app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
});

export default app;