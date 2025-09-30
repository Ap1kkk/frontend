import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const sendFirstData = async () => {
    const response = await fetch('http://localhost:8080/api/save-data', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: input})
    })
    const result = await response.json()
    setResponseMessage(result.message)
    setInput1("")
  }

  const fetchSecondData = async () => {
    const response = await fetch('http://localhost:8080/api/get-data')
    const result = await response.json()
    setInput2(result.data)
  }

  return (
      <div className="App">
        <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder='Введите данные для отправки'
        />
        <button onClick={sendFirstData}>Отправить</button>
        <p>{responseMessage}</p>
        <button onClick={fetchSecondData}>Отправить</button>
        <input
            type="text"
            value={input2}
            readOnly
            placeholder='Получение данных'
        />
      </div>
  );
}

export default App;
