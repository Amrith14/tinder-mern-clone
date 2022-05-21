import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./ChatScreen.css";


function ChatScreen() {

   const[input,setInput] = useState('');
   const[messages,setMessages] = useState([

    
    {
      name:'Joe',
      
      message:'Yo Bro',
      
      image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  
    },

    {
      name:'Joe',

      message:"How's it going",

      image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",

    },

    {
      message:"Going great",
    },

    {
      message:"Or is it ?",
    },

   ]);

 

   const handleSend = (e) => {
     e.preventDefault();

     setMessages([...messages, { message:input }]);
     setInput("");

   };

  return (

    <div className='chatScreen'>

      <p className='chatScreen__timestamp'>
        YOU MATCHED WITH JOE ON 10/08/20
      </p>

      {messages.map((message) => (
          message.name ? (

          <div className='chatScreen__message'>
          <Avatar 
             className="chatScreen__image"
             alt={message.name}
             src={message.image}
          />

          <p className='chatScreen__text'>{message.message}</p>
          </div>

          ): (

            <div className='chatScreen__message'>
              <p className='chatScreen__textUser'>{message.message}</p>
            </div>
          )

      ))}

     
        <form className='chatScreen__input'>
          <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chatScreen__inputField"   
              placeholder = "Type a message..." 
              type="text"
          />

          <button 
              type = "submit" 
              onClick={handleSend} 
              className="chatScreen__inputButton">
                
                SEND      
          </button>
        </form>
      




    </div>
  );
}

export default ChatScreen;