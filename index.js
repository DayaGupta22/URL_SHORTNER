const express = require('express');
const app = express();
const dotenv = require('dotenv')
const path = require('path');
const URL = require('./models/url.js')
const urlRoute = require('./routes/url.js')
const staticRoute = require('./routes/staticRouter.js')
const connectDb = require('./connect')
const PORT = 8000;
dotenv.config()


app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// connection with database 
connectDb()
    .then(() => console.log("connection establish"))
    .catch((err) => console.log("connection failed", err))
// this is the update the how much click on the click on short id 
 app.get('/test', (req, res) => {
    const allusers = URL.find({});
    return res.render('Home',{
        urls:allusers,
   })


 })

// write a today routes for api and handle by routes folder 
// and routes folder redirect to the controller 
app.use('/fsfs',staticRoute)
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`server is running at PORT:${PORT}`))
