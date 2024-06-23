import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CartItem from './components/CartItem';
import{ Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Overlay from './components/Overlay';
import CardSweets from './components/CardSweets';
import Like from './components/Like';
import CardHome from './components/CardHome';
import { useNavigate } from 'react-router-dom';

export const AppContext = React.createContext({});

function App() {
  const [flower, setflower] = useState([]);
  const [sweets, setsweets] = useState([]);
  const [overlayItems, setoverlay] = useState([]);
  const [likeItems, setlike] = useState([]);
  const [home, sethome] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getData() {
      const flower = await axios.get('http://localhost:3001/flower');
      const sweets = await axios.get('http://localhost:3001/sweets');
      const overlay = await axios.get('http://localhost:3001/overlays');
      const like = await axios.get('http://localhost:3001/like');
      const home = await axios.get('http://localhost:3001/home');
      
      setflower(flower.data);
      setsweets(sweets.data);
      setoverlay(overlay.data);
      sethome(home.data);
      setlike(like.data);
    }
    getData();
  }, [navigate])


  const isAddLike = (myId) => {
    return likeItems.some((objIsAddLike) => objIsAddLike.myId === myId)
  }

  const deleteItemLike = (id) => {
    axios.delete(`http://localhost:3001/like/${id}`)
    setlike((over) => likeItems.filter(item=> Number(item.id) !== Number(id)));
  }


  const isAdd = (myId) => {
    return overlayItems.some((objIsAdd) => objIsAdd.myId === myId)
  }

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/overlays/${id}`)
    setoverlay((over) => overlayItems.filter(item=> Number(item.id) !== Number(id)));
  }

  const totalPrice = overlayItems.reduce((total, obj)=> total + obj.price, 0);

  return (
    <AppContext.Provider
     value={{
      flower,
      setflower,
      overlayItems,
      setoverlay,
      sweets,
      setsweets,
      isAdd,
      isAddLike,
      likeItems,
      setlike,
      home
    }}>
    <div>
    <Header/>
    <Routes>
      <Route
        path='/flower'
        element={
          <CartItem
          item={flower}
          overlayItems={overlayItems} 
          setoverlay={setoverlay}
          likeItems={likeItems}
          setlike={setlike} 
          search={search}
          setSearch={setSearch}
          />
        }
      />
       <Route
        path='/overlay'
        element={
          <Overlay 
          overlayItems = {overlayItems}
          deleteItem = {deleteItem}
          totalPrice = {totalPrice}
          />
        }
      />
        <Route
        path='/home'
        element={
          <CardHome item={home}
          sethome={sethome}
          />
        }
      />
       <Route
        path='/sweets'
        element={
          <CardSweets
          item={sweets}
          overlayItems={overlayItems}
          setoverlay={setoverlay}
          likeItems={likeItems}
          setlike={setlike}
          search={search}
          setSearch={setSearch}
          />
        }
      />
      <Route
        path='/like'
        element={
          <Like
          deleteItemLike={deleteItemLike}
          likeItems={likeItems}
          />
        }
        />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
export default App;
