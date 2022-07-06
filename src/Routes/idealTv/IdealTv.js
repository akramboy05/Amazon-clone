import React from 'react';
import "./IdealTv.css"
import {TvPage} from '../../static/static'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function IdealTv() {
    return (
        <div className='tv'>
            <div className="tv_sidebar">

            </div>
            <div className="tv_leftbar">
                <h2>RESULTS</h2>
                <div className="TvWrapper">
                
                {TvPage?.map((item, inx)=>(
                    <div key={inx} className='TvProducts'>
                        <Link to={`/idealTv/${item.id}`}>
                            <img src={item.img} alt="" />
                        </Link>
                        <h2>{item.title}</h2>
                         <span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
                       
                    </div>
                ))}
             </div>
            </div>
        </div>
    );
}

export default IdealTv;