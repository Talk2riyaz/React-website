import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Switch, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
   
        <Navbar />

        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

        </Switch>

        <Footer />
    
    </div>


  );
}

export default App;
