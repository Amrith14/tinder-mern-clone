import React from 'react';
import Chat from "./Chat"
import './Chats.css';

function Chats() {
return ( 

  <div className="Chats">

  <Chat
  name = "Joe"
  message = "Yo Bro"
  timestamp = "40 seconds ago"
  profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  />

  <Chat
  name = "Mark"
  message = "Hey There!"
  timestamp = "40 seconds ago"
  profilePic="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls="
  />

  <Chat
  name = "Charlie"
  message = "What you doing'"
  timestamp = "40 seconds ago"
  profilePic="https://media.istockphoto.com/photos/portrait-of-smiling-teenage-boy-leaning-against-wall-in-urban-setting-picture-id1154990919?k=20&m=1154990919&s=612x612&w=0&h=8beIeCjS1lkVOffaUN55twTCjLycO0JNQFZ2hFdWJKw="
  />


  <Chat
  name = "Laiba"
  message = "You there ?"
  timestamp = "40 seconds ago"
  profilePic="https://i.insider.com/5cb8b133b8342c1b45130629?width=700"
  />


  <Chat
  name = "Ace"
  message = "It's boring"
  timestamp = "40 seconds ago"
  profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf4qBU7CblxU4fhEAbmocfOlRG4pzAcAuJA&usqp=CAU"
  />

  
</div>

);
}

export default Chats