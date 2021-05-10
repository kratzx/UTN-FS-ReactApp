import { Route } from 'react-router';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailsPage from './pages/DetailsPage';
import AddProductPage from './pages/AddProductPage';

const Routes = () => (
  <>
    <Route path='/' component={HomePage} exact/>
    <Route path='/login' component={LoginPage} exact/>
    <Route path='/register' component={RegisterPage} exact/>
    <Route path='/product/:id' component={DetailsPage} exact/>
    <Route path='/addproduct' component={AddProductPage} exact/>
  </>
);

export default Routes;

