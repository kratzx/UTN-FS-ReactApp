import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'; 

import './resources/styles/App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> TP React UTN </h1>
        <Route path='/' component={HomePage} exact/>
        <Route path='/login' component={LoginPage} exact/>
        <Route path='/register' component={RegisterPage} exact/>
        <Route path='/product/:id' component={DetailsPage} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;