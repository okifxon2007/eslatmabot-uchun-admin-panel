import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import './App.css';

const firebaseConfig = {
    apiKey: "AIzaSyBqjQ2SosKX_OFRRiybn0y5AXOc02Bq2Gg",
    authDomain: "xabar-bot-abba1.firebaseapp.com",
    databaseURL: "https://xabar-bot-abba1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "xabar-bot-abba1",
    storageBucket: "xabar-bot-abba1.firebasestorage.app",
    messagingSenderId: "183488885435",
    appId: "1:183488885435:web:c1d5e922ca9a7c4bc2af9e",
    measurementId: "G-17Y303378H"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const massageref = useRef('');
  const [messages, setMessages] = useState([]); 

  
  useEffect(() => {
    const messagesRef = ref(database, 'messages'); 
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {

        const formattedMessages = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setMessages(formattedMessages); 
      } else {
        setMessages([]); 
      }
    });
  }, []); 
  function handlesave() {
    const message = massageref.current.value;

    if (message.trim()) {
      const messageRef = ref(database, 'messages/' + new Date().getTime());
      set(messageRef, {
        text: message,
        timestamp: new Date().toISOString()
      })
        .then(() => {
          console.log("malumot togri ");
          alert("malumot togri");
        })
        .catch((error) => {
          console.error( error);
        });

      massageref.current.value = '';
    } else {
      alert("malumot yoq!");
    }
  }

  return (
    <>
      <div className="admin-panel">
        <div className="message">
          <h3>Admin Panel</h3>
          <p>Bot kanalga yuborishi kerak bo'lgan ma'lumotni kiriting</p>
          <textarea ref={massageref} rows="10" cols="50" placeholder="Ma'lumotni kiriting"></textarea>
        </div>
        <button className="admin-button" onClick={handlesave}>Save</button>
      </div>
      <div className="messages-list">
        <h3>Fetched Messages</h3>
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>
              <strong>Text:</strong> {msg.text} <br />
              <strong>Timestamp:</strong> {msg.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
