import './App.css';
import Machines from './components/Machines';
import { useState, useEffect } from 'react'
import Popupform from './components/Popupform';

function App() {
  const [inUse1, setinUse1] = useState(false)
  const [inUse2, setinUse2] = useState(false)
  const [inUse3, setinUse3] = useState(false)
  const [inUse4, setinUse4] = useState(false)
  const [buttonPopup1, setbuttonPopup1] = useState(false)

  useEffect(() => {
    setinUse1(JSON.parse(window.localStorage.getItem('inUse1')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('inUse1', inUse1);
  }, [inUse1]);

  useEffect(() => {
    setinUse2(JSON.parse(window.localStorage.getItem('inUse2')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('inUse2', inUse2);
  }, [inUse2]);

  useEffect(() => {
    setinUse3(JSON.parse(window.localStorage.getItem('inUse3')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('inUse3', inUse3);
  }, [inUse3]);

  useEffect(() => {
    setinUse4(JSON.parse(window.localStorage.getItem('inUse4')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('inUse4', inUse4);
  }, [inUse4]);

  return (
    <div className="App">
      <div class="topnav">
        <a onClick={() => setbuttonPopup1(true)}>How to use</a>
      </div>
      <div class="row">
        <div class="column">
          <Machines trigger = {inUse1} setTrigger = {setinUse1}></Machines>
        </div>
        <div class="column">
          <Machines trigger = {inUse2} setTrigger = {setinUse2}></Machines>
        </div>
        <div class="column">
          <Machines trigger = {inUse3} setTrigger = {setinUse3}></Machines>
        </div>
        <div class="column">
          <Machines trigger = {inUse4} setTrigger = {setinUse4}></Machines>
        </div>
      </div>
      <Popupform trigger = {buttonPopup1} setTrigger = {setbuttonPopup1}>
          How to Use
          <p> Click on view to check in or out from the machine. If the icon is red, it means the machine is in use, else it is free.</p>
      </Popupform>
    </div>
  );
}

export default App;
