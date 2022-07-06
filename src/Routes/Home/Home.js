import React,{createContext, useEffect, useState} from 'react';
import Banner from '../../components/Banner/Banner';
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';
import "./Home.css"
import {db} from '../../server/firebase'

export const dataHome = createContext()
let dataStr ="Lorem  ipsum dolor sit amet"

function Home() {
    const [data, setData] = useState([])

    useEffect(()=>{
        db.collection("phones").onSnapshot(item =>{
            setData( item.docs.map(product =>{
                return{
                    id:product.id,
                    data: product.data()
                }
            }))
        })

    }, [])
    console.log(data);
    return (
       <dataHome.Provider value={dataStr}>
            <div className='home'>
                {
                    data?.map(item => (
                        <div key={item.id}>
                            {/* <img width="300" src={item.data.img} alt="" /> */}
                            {/* <h2>{item.data.name}</h2> */}

                        </div>
                    ))
                }
            <Banner/>
            <ProductWrapper/>
        </div>
       </dataHome.Provider>
    );
}

export default Home;