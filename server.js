const express = require('express');
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
require("dotenv").config();

app.use(cors({ origin: "*" }));
app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

// Code that tells heroku where to find react build files
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')))
  
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
  }else{
    app.get('/', (req, res) => {
        res.send('Api running')
    })
  }

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running, you better catch it!");
});