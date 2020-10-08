import React,{useEffect} from 'react';
import Header from './components/Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import FacebookProfile from './components/FacebookProfile'
import {connect} from 'react-redux';
import {fetchUserAction} from './actions/myaction';
import Register from './components/Register'
import Login from './components/Login'
function App(props) {
  useEffect(()=>{
    props.fetch_user()
  },[])

  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/facebookprofile" component={FacebookProfile} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />



    </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}

export default connect(null,mapDispatchToProps)(App);
