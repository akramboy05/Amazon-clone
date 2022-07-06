import React from "react";
import "./OneItem.css";
import { elecProducts } from "../../static/static";
import { AiFillStar } from "react-icons/ai";
import {BiMap} from 'react-icons/bi'
import Zoom from "../zoomImage/Zoom";
import {useStateValue} from "../../context/stateprovider/stateProvider"
import {TvPage} from "../../static/static"

function OneItem({ match }) {
  let filterData = elecProducts.filter(
    (item) => item.id === Number(match.params.itemId)
  )[0];
  const [state, dispatch] = useStateValue()
  const addProduct =(product)=>{
    dispatch({type:"ADD_PRODUCTS", product: [ ...state.productAll, product]})
  }
  
  console.log(state);
  return (
    <div className="oneItem">
      <div className="oneItem_shop">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/ILM/Fuji_ILM_Ship_en_US._CB665226464_.png"
          alt=""
        />
      </div>
      <div className="oneItem_wrapper">
        <div className="oneItem_img">
          {/* <p>Electronics › Computers&Accessories › Computers & Tablets</p> */}
          {/* <img src={filterData.img} alt="" /> */}
          <Zoom image={filterData.img}/>
        </div>
        <div className="oneItem_left">
          <h2>{filterData.title}</h2>
          <p>{filterData.p}</p>
          <span>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
          
          <h4>About this item</h4>
          <button className="addCart_btn" onClick={()=> addProduct(filterData)}>Add to cart</button>
        </div>
        <div className="OneItem_todolist">
          <button className="todolist_button">See All Buying Options</button>
          <p><BiMap/> Deliver to Virgin Islands, British</p>
          <button className="todolistAdd_button">Add to todolist</button>
        </div>
      </div>
    </div>
  );
}

export default OneItem;
