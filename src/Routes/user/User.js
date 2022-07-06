import React, { useState } from 'react'
import Admin from '../admin/Admin'
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import Login from '../Login/Login'
import "./User.css"
import {useStateValue} from '../../context/stateprovider/stateProvider'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../../server/firebase'

const User = () => {
  // const [{user}, dispatch] = useStateValue()
  const [user] = useAuthState(auth)
  // console.log(user);
  
  return user ? (
      <Switch>
         <Route path="/user/admin" component={Admin} /> 
         <Redirect to="/user/admin"></Redirect>
      </Switch>
  ):(
      <Switch>
        <Route path="/" component={Login}/>
        <Redirect to="/user/login"></Redirect>
      </Switch>
  )
}

export default User