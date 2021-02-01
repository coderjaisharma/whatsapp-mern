import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Pusher from "pusher-js";
import {useEffect,useState} from 'react'
import axios from "./axios";

function App() {
const [messages,setMessages]=useState([]);

  useEffect(()=>{
    axios.get('/messages/sync').then((response)=>setMessages(response.data))}
  ,[]);
  useEffect(()=>{
    var pusher = new Pusher('4ffb602f7ce33ee795bb', {
      cluster: 'ap2'
    },[]);

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });
return ()=>{
  channel.unbind_all();
  channel.unsubscribe();
}
  },[messages]);
  console.log(messages);
  

  return (
    <div className="App"> 
      <div className="app__body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
