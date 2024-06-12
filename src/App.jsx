import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import CartItem from './components/CartItem';
import{ Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Overlay from './components/Overlay';
import CardSweets from './components/CardSweets';

export const AppContext = React.createContext({});

function App() {
  const [data, setData] = useState([]);
  const [overlayItems, setoverlayItems] = useState([]);
  const [overlayHome, setoverlayHome] = useState([]);
  const [sweets, setsweets] = useState([]);

  useEffect(() => {
    async function getData() {
    const datas = await axios.get('http://localhost:3001/flower');
    const overlayData = await axios.get('http://localhost:3001/overlays');
    const overlayHomeData = await axios.get('http://localhost:3001/home');
    const sweetsData = await axios.get('http://localhost:3001/sweets');
    setData(datas.data);
    setoverlayItems(overlayData.data);
    setoverlayHome(overlayHomeData.data);
    setsweets(sweetsData.data);
    }
    getData();
  }, [])

  const isAdd = (myId) => {
     return overlayItems.some((objIsAdd) => objIsAdd.myId === myId)
  }

  return (
    <AppContext.Provider
     value={{
      data,
      setData,
      overlayItems,
      setoverlayItems,
      sweets,
      setsweets,
      isAdd
    }}
     
     >
    <div>
    <Header/>
    <Routes>
      <Route
        path='/flower'
        element={
          <CartItem item={data}/>
        }
      />
       <Route
        path='/overlay'
        element={
          <Overlay overlayItems={overlayItems}/>
        }
      />
        <Route
        path='/home'
        element={
          <Home overlayHome={overlayHome}/>
        }
      />
       <Route
        path='/sweets'
        element={
          <CardSweets item={sweets}/>
        }
      />

    </Routes>
    </div>
    </AppContext.Provider>
  );
}
export default App;
