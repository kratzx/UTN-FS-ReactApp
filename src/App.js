import { BrowserRouter } from 'react-router-dom';
import './resources/styles/App.css';
import Navbar from './components/Navbar'
import Routes from './Routes'
import LoginState from './context/LoginState'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <LoginState>
        <BrowserRouter>
          <Header/>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </LoginState>
    </div>
  );
}

export default App;