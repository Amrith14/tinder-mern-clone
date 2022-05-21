import React from "react";
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from './ChatScreen';

import "./App.css";

//<h1>TINDER Clone ;) </h1>

function App() {
  return (
    <div className="App">

      <Router>

        <Routes>
            
            <Route exact path="/chat/:person" element={<><Header backButton="/chat" /><ChatScreen/></>} />

            <Route exact path="/chat" element={<><Header backButton="/" /><Chats /></>} />
              
            <Route exact path="/profile" element={<><Header/><h1>Profile Page ;)</h1></>} />

            <Route exact path="/" element={<><Header/><TinderCards /><SwipeButtons /></>}/>
                 

        </Routes>
        
      
        {/* Tinder Cards */}
        {/* Buttons below Tinder Cards */}
        {/* Chats Screen */}
        {/* Individual Chat Screen */}
      </Router>

      


    </div>
  );
}



export default App;


      