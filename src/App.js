import { useState, useEffect } from "react";
import Message from "./Message";
import './App.css';
import db from "./firebase";
import FlipMove from 'react-flip-move';
import firebase from 'firebase/compat/app';

function App() {

  const [input, setinput] = useState('');
  const [message, setmessage] = useState([]);
  const [userName, setuserName] = useState('');

  useEffect(() => {
    db.collection('message')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setmessage(snapshot.docs.map(doc => doc.data()))
      })


      document.addEventListener('keydown', () => {
        document.querySelector('#inp').focus()
      })
  }, [])



  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('message').add({
      username: userName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setmessage([...message, { username: userName, message: input }]);
    setinput("");
  }

  useEffect(() => {
    setuserName(prompt("Please Enter your name."))
  }, [])


  return (
    <div className="App mx-auto">
    <img width={50} height={50} src='/messenger.png' />
      <h1>Messenger Clone</h1>

      <form className="p-[20px] fixed bottom-0 bg-[#e9e9eb] z-[1] w-[80%] mx-auto mt-[50px] flex items-center">
        <input id='inp' placeholder="Enter a message..." className="focus:outline-0 lg:w-[90%] md:w-[85%] w-[70%] p-2 border-b-4 border-indigo-500" onChange={(e) => setinput(e.target.value)} value={input} />
        <button disabled={input.length === 0} className="text-white px-8 py-2 lg:w-[10%] md:w-[15%] w-[30%] rounded-[6px] text-center hover:opacity-80" type="submit" onClick={sendMessage}>
          <img src='/send-message.png' width={20} height={20} />
        </button>
      </form>

      <FlipMove className="h-[80vh] overflow-y-auto pb-24 container">
        {
          message.map((chat, index) => (
            <Message key={index} userName={userName} message={chat} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
