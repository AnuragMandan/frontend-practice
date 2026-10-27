import React, { useState } from "react";
import hero from "../assets/hero.png";
import react from "../assets/react.svg";
import vit from "../assets/vite.svg";
import Sidebar from "./Sidebar";
import apple from "../assets/images/apple.png";
import orange from "../assets/images/orange.png";
import mango from "../assets/images/mango.png";

const card = [
  { src: apple, name: "apple", about: "5$" },
  { src: orange, name: "orange", about: "2$" },
  { src: mango, name: "mango", about: "10$" },
];
const Cards = () => {
  const [Side, setSide] = useState(true);
  

  const [list, SetList] = useState([]);

const Remove = (index) => {
  SetList(
    list.map((val, i) =>
        i === index ? { ...val, quantity: val.quantity - 1 } : val
      )
      .filter((val) => val.quantity > 0)
  );
};

  return (
    <>
      <div className={`w-full h-screen flex`}>
        <Sidebar Side={Side} setSide={setSide} />
        <div className="w-full  flex justify-center gap-[50px] items-center ">
          <button
            onClick={() => {
              setSide(!Side);
            }}
            className={`text-white cursor-pointer rounded-3xl p-2 ${Side ? "bg-black" : "bg-amber-300"}`}
          >
            click me !
          </button>
          {card.map((ca) => (
            <div>
              <article
                className={`text-[green] border-2 border-amber-300 max-w-[300px] w-full text-center flex flex-col duration-300`}
              >
                <img
                  className="h-50 w-full"
                  src={ca.src}
                  alt={`${ca.name} img`}
                />
                <h3 className="bg-green-500">{ca.name}</h3>
                <div>
                  <p>{ca.about}</p>
                </div>
              </article>
              <span className="flex justify-center mt-3">
                <button
                  className="cursor-pointer bg-amber-50 rounded-[20px] p-4"
                 
onClick={() => {
  const exists = list.find((item) => item.name === ca.name);

  if (exists) {
    SetList(
      list.map((item) =>
        item.name === ca.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    SetList([...list, { name: ca.name, quantity: 1 }]);
  }
}}

                >
                  Add To Cart
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute h-screen w-34 flex flex-col items-center right-0 top-0 bg-amber-300">
        <h2>Shopping Cart</h2>
     
<ul>
  {list.map((item, index) => (
    <div key={item.name} className="flex gap-2 mt-2">
      <li>
        {item.name} x {item.quantity}
      </li>

      <button onClick={() => Remove(index)}>
        Remove
      </button>
    </div>
  ))}
</ul>
    <h4>pay now:{}</h4>
      </div>
    </>
  );
};

export default Cards;
