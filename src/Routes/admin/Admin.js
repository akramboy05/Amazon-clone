import React, {useState} from 'react'
import "./Admin.css"
import { auth ,db} from '../../server/firebase'

const Admin = () => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [type, setType] = useState("Watch")
  const [price, setPrice] = useState(0)

  const signOut=()=>{
      auth.signOut()
  }
  const addProduct = ()=>{
      db.collection(type).add({
        img:image,
        name:name,
        price: price
      })
      setName("")
      setImage("")
      setPrice("")
  }  
return (
    <div className='admin'>
        {/* <h1>Admin</h1> */}
        <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='name' />
        <input value={image} onChange={e=>setImage(e.target.value)} type="text" placeholder='image' />
        <input value={price} onChange={e=>setPrice(e.target.value)} type="text" placeholder='price' />
        <select onChange={(e)=> setType(e.target.value)}>
          <option value="Watch">Watch</option>
          <option value="phones">Phones</option>

        </select>
        <button onClick={addProduct}>Add product</button>
        <button onClick={signOut}>Sign out</button>
    </div>
  )
}

export default Admin