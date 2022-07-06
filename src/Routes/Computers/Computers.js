import React from 'react';
import "./Computers.css"
import {elecProducts} from '../../static/static'
import {AiFillStar} from 'react-icons/ai'
import { electronicSidebarData} from '../../static/static'
import {Link} from 'react-router-dom'

function Computers() {
    return (
        <div className='electronics'>
            <div className="electronic_sidebar">
                <h3>Department</h3>
                <h2>Computers</h2>
                {
                    electronicSidebarData?.map((i, inx) => 
                    <div key={inx} className="electsidebarData">
                        {
                            i.title ? i.title.map((d, inx) => 
                                <li key={inx}>{d}</li>
                                ): null
                        }
                        <h3>{i.h3}</h3>
                        {/* <span>  <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </span>
                        <span>  <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </span>
                        <span>  <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </span>
                        <span>  <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> </span> */}
                        <h3>Certifications</h3>
                        <li>Energy Star</li>
                        <h3>Amazon Global Store</h3>
                        <li>Amazon Global Store</li>
                    </div>    
                     )
                }
            </div>
            <div className="leftbar">
              <span>
              <h1>Computers, Tablets and IT Accessories</h1>
                <p>Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more</p>
              </span>
              <div className="leftbar_span">
                <p>1-12 of over 80,000 results for <a href="">Computers</a></p>
            </div>
            <div className="electornicWrapper">
                
                   {elecProducts?.map((item, inx)=>(
                       <div key={inx} className='electronicsProducts'>
                           <Link to={`/computers/${item.id}`}>
                           <img src={item.img} alt="" />
                           </Link>
                           
                           <h2>{item.title}</h2>
                            <span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
                            <h4>{item.sell}</h4>
                       </div>
                   ))}
                </div>
                </div>
        </div>
    );
}

export default Computers;