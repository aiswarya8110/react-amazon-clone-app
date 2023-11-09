import './App.css';
import React, { useEffect, useContext } from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { onAuthStateChanged, auth } from './firebase';
import { ShoppingContext } from './ContextProvider';

function App(){
  const { dispatch, state } = useContext(ShoppingContext);
  console.log(state);
  useEffect(()=>{

    // Add a listener when the signIn/signOut state changes
    const unsubscribe = onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        dispatch({type: "MODIFY_USER", payload: authUser.email})
      }
      else{
        dispatch({type: "MODIFY_USER", payload: null})
      }
    })

    // clean up function
    return ()=> unsubscribe();

  },[dispatch])

  return (
        <div className="app">
        <Switch>
          <Route exact path="/"><Header /><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/checkout"><Header /><Checkout /></Route>
          <Route path="*"><Header /><Home /></Route>
        </Switch>
        </div>
  );
}

export default App;
