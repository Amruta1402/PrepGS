import React,{Component} from 'react'
import {Navbar,NavbarBrand} from 'reactstrap';
import Home from './components/HomeComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state={
    //   info:INFO
    // }
  }
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
