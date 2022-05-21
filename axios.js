import axios from 'axios'

/* let instance = axios.get('https://tinder-mern-demo.herokuapp.com', //proxy uri
{
   headers: {
      authorization: ' xxxxxxxxxx' ,
      'Content-Type': 'application/json'
   } 
}).then(function (response) {
   console.log(response);
});


export default instance; */



let instance = axios.create({
 headers:{
   common:{
    "Access-Control-Allow-Origin":"*",
    
   } 
  },

  baseURL: "https://tinder-mern-demo.herokuapp.com",

})

export default instance;



//baseURL: "https://tinder-mern-demo.herokuapp.com