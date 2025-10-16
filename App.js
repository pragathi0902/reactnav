import React, {Component} from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./task4/home";
import About from "./task4/about";
import Contact from "./task4/contact";
import "./App.css";
class App extends Component{
  render(){
    return( 
      <Router>
        <div className="App">
          <nav className="navbar navbar-default"> 
            <div className="container-fluid">
               <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
     </Router>

    );  
  }
}
export default App;

