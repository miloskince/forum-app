import React, { useState } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Main from './layout/main';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  const [user,setUser] = useState()

  return (
    <div className="App">
    <Router>
    <Header user={user} logedIn={user} setUser={setUser} />
    <hr />
    <Main setUser={setUser} user={user} />
    <hr />
    <Footer />
    </Router>
    </div>
  );
}

export default App;
