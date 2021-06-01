import React from 'react';
import CovidData from './Components/CovidData';

function App() {
  return (
    <>
    <div className="text-center m-2" style={{font:"menu",fontFamily:"fantasy",fontSize:"40px",color:"darkgoldenrod"}}>
    Live Covid Tracker India
    </div>
    <CovidData/>
    </>
  );
}

export default App;
