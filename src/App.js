import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Routes/Home/Home'
import Login from './Routes/Login/Login'
import Products from './Routes/Products/Products';
import {useLocation} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Cart from './Routes/Cart/Cart';
import Computers from './Routes/Computers/Computers';
import Watch from './Routes/Watch/Watch'
import idealTv from './Routes/idealTv/IdealTv'
import OneItem from './Routes/One-item/OneItem';
import TvItem from './Routes/TvItem/TvItem'
import {useStateValue} from './context/stateprovider/stateProvider'
import ScrollToTop from './scrolTop/ScrolTop';
import User from './Routes/user/User'
function App() {
  // const [state, action] = useStateValue()

  // console.log(state.sum);
  return (
    <div className="App">
     

     <Router>

        <ScrollToTop>
        <Navbar/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/login" component={Login}/>
         <Route path="/products" component={Products}/>
         <Route exact path="/computers" component={Computers}/>
         <Route path="/watch" component ={Watch}/>
         <Route exact path="/idealTv" component ={idealTv}/>
         <Route path="/carts" component={Cart}/>
         <Route path="/computers/:itemId" component={OneItem}/>
         <Route path="/idealTv/:itemId" component={TvItem}/>
         <Route path="/user" component={User} />
       </Switch>
       <Footer/>
       
        </ScrollToTop>  
     </Router>
    </div>
  );
}

export default App;
