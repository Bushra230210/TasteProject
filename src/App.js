import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       

       <Home />

       <Profile />
      </header>
    </div>
  );
}

export default App;
