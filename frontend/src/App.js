import logo from './logo.svg';
import './App.css';
import Home from "./routes/Home";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Outlet />
      </header>
    </div>
  );
}

export default App;
