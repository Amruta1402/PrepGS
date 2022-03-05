import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark className="bg-dark">
        <div className="container">
          <NavbarBrand href='/'>PrepGS</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
