import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div className="App">
      <ul>
        <li>asdf</li>
      </ul>
    </div>
  );
}

export default App;
