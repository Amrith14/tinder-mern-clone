import React, { useState,useEffect } from "react";
import TinderCard from "react-tinder-card"
import axios from "./axios"
import './TinderCards.css'

function TinderCards() {

   const [people, setPeople] = useState([]);
 

   useEffect(() => {
     

    const fetchData = async() => {

      const req = await axios.get("/tinder/cards")
      setPeople(req.data);
    
    }

    fetchData();

   }, []);

  



   //const req = await axios.get("/tinder/cards");


   /*
   useEffect(() => {
      const fetchData = async() => {
        const req = await axios.get("/tinder/cards")
        setPeople(req.data)
      }
      fetchData()
   }, [])

   */


    /*
    {
      name:'Harry Styles',
      url:'https://media.glamour.com/photos/62470f3dd07b65b164122982/1:1/w_3648,h_3648,c_limit/931619330'
    },
 
    {
     name:'Taylor Swift',
     url:'https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg'
    },

   ]);
  
   */

   //Comment write
   /*
      BAD

      const people = [];
      people.push('harry','taylor');

      GOOD (Push to an array in REACT)

      setPeople([...people,'harry','taylor'])



   */

   
  
  const swiped = (direction, nameToDelete) =>{
    console.log("receiving " + nameToDelete + "in " + direction);
  }


  const outOfFrame = (name) =>{
    console.log(name + " left the screen !");
  }

   

  return (
    <div className="tinderCards__cardContainer">
    
      {people.map(person => (

        <TinderCard
           className="swipe"
           key = {person.name}
           preventSwipe={['up','down']}
           onSwipe={(dir) => swiped(dir,person.name)}
           onCardLeftScreen={() => outOfFrame(person.name)}
        >


           <div 
            style={{ backgroundImage: `url(${person.url})` }}
            className = "card">

                <h3>{person.name}</h3>

           </div>

        </TinderCard>

      ))}



    </div>
  );
}

export default TinderCards