import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import "./Navbar2.css"
import {GoThreeBars} from "react-icons/go"
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import {Greeting} from '../../index'
import {useStateValue} from "../../context/stateprovider/stateProvider"
function Navbar2() {
    const val =useContext(Greeting)
    // console.log(val);

    const [state, action] = useStateValue()

    // console.log(state);

    let lorem ="lorem ipsum"

    useEffect(()=>{
        action({type:"ADD_SUM", sum:lorem})
    },[])
    

    const [sidebarShow, setSidebarShow] = useState(false)
    sidebarShow ? document.body.style.overflow ="hidden" : document.body.style.overflow ="auto"
    console.log(sidebarShow)
    return (
        <>
          <div className='navbar2'>
            <div onClick={()=> setSidebarShow(true)} className="all">
                <GoThreeBars/>
                <li>All</li>
            </div>
            <div className="collection">
                <li>Today's Deals</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Cards</li>
                <Link to="/products">
                <li>Sell</li>
                </Link>
            </div>
        </div>
        <Sidebar show={sidebarShow} setShow={setSidebarShow}/>
        </>
      
    );
}

export default Navbar2;