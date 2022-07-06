import React, { useState, useEffect } from "react";
import "./Watch.css";
import { db } from "../../server/firebase";
import { BsFillStarFill } from "react-icons/bs";

function Watch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("Watch").onSnapshot((item) => {
      setData(
        item.docs.map((product) => {
          return {
            id: product.id,
            data: product.data(),
          };
        })
      );
    });
  }, []);
  console.log(data);
  return (
    <div className="watch">
      <div className="watch_sidebar"></div>
      <div className="watch_leftbar"> 
        {data?.map((item) => (
          <div key={item.id}>
            <div className="data-img">
              <div className="watch-img">
                <img src={item.data.img} alt="" />
              </div>
              <div className="data-watch-left">
                <h4>{item.data.name}</h4>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <h4>{item.data.price} $</h4>
                <button className="cartButton">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch;
