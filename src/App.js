import { BrowserRouter } from 'react-router-dom';

import './resources/styles/App.css';
import Menu from './components/Menu'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> TP React UTN </h1>
        <Menu />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;