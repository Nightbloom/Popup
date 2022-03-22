import React from 'react';
import Popup from './components/Popup';
import { useState } from 'react';


function App() {
  const [buttonPopup, setbuttonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br></br>
        <button onClick={() => setbuttonPopup(true)}>Open Popups</button>
      </main>
        <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
          <h3>My popup</h3>
        </Popup>
    </div>
  );
}

export default App;
