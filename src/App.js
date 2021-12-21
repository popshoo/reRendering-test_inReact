import { useState } from 'react';
import  A  from './components/A';
import  B  from './components/B';
import  C  from './components/C';
import './App.css';

function App() {
  const [message, setMessage] = useState('racecar')
    return (
    <>
    <A message={message}/>
    <B />
    <C />
    <p>{message}</p>
    <button onClick={() => setMessage(message.split('').reverse().join(''))}>Meverse Message</button>
    </>
  );
}

export default App;