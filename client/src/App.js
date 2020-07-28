import React from 'react';
import './App.css';
import Navbar from './apps/components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Login, Signup, Profile } from './apps/components/screens';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
