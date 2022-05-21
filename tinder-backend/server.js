import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//const cors = require ('cors') ; 

//const proxy = require('proxy-middleware');

//const cors = require('cors');
import Cards from './dbCards.js'

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://user-one:amrith@cluster0.1wynv.mongodb.net/tinderCloneVersionOneDatabase?retryWrites=true&w=majority';


//Middleware
app.use(express.json());
app.use(cors());

/*app.use(function(req, res, next) {
  if (Access-Control-Allow-Origin == '*' && Access-Control-Allow-Credentials == 'true') {
    Access-Control-Allow-Origin = 'https://tinder-mern-demo.herokuapp.com'
  }
  
  }); /*

/* const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:8001', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen('https://tinder-mern-demo.herokuapp.com'); */

//app.use(cors({origin:["*"], credentials: true}));


//app.use(cors({origin:["http://localhost:3000","http://localhost:8001"], credentials: true}));




//DB Config
mongoose.connect(connection_url, {
  //useFindAndModify:false,
  useNewUrlParser:true,
  useUnifiedTopology:true
});

//API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello there"));

app.post("/tinder/cards", (req,res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err,data) => {
    if(err){
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });

});

app.get("/tinder/cards", (req,res) => {

  Cards.find((err,data) => {
    console.log(data)
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
  
});

// Posted it to database manually by using postman - same mongoose structure + post function - http://localhost:8001/tinder/cards

//Listener
app.listen(port, () => console.log(`Listening to Localhost: ${port}`))












// DB Password - Asdfghjkl_14 , amrith - username