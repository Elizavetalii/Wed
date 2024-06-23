import React from 'react';
import Item from './Item';
import axios from 'axios';
import Home from './Home';

import { motion, useScroll } from "framer-motion";

const CardHome = (props) => {
    const { scrollYProgress } = useScroll();
  return (
 

    <div className="home">
      <div>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <h1>Добро пожаловать в наш магазин красоты, цветов, тортов и ягод!</h1>
      <p>Наслаждайтесь красотой и изысканными цветами, погрузитесь в мир вкусных тортов и свежих ягод. Мы предлагаем лучшие товары для вашего удовольствия.</p>
      <form>
        <input type="text" placeholder="Введите сообщение"/>
        <button>Отправить</button>
      </form>
      <h2>Наш ассортимент:</h2>

      {
        props.item
          .map(obj=>{
                return(
                    <Home
                    id={obj.id}
                    myId={obj.myId}
                    key={obj.id}

                    name={obj.name}
                    price={obj.price}
                    count={obj.count}
                    country={obj.country}
                    img={obj.img}
                    />
                )
            })
        }
          </div>
    </div>
  );
}

export default CardHome;