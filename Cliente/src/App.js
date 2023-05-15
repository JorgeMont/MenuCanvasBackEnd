
import { Routes, Route } from 'react-router';
import './App.scss';
import CreateProfilePage from './Pages/CreateProfilePage';
import MenuEditorPage from './Pages/MenuEditorPage';
import SelectYourPlan from './Pages/SelectYourPlan';
import LandingPage from './Pages/LandingPage/LandingPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Payment from './Pages/Payment/Payment';
import Purchase from './Pages/Purchase/Purchase';
import EditDish from './Pages/EditDish/EditDish';
import Sucription from './Pages/Suscription/Suscription';
function App() {
  return (
  <>
    <Routes>
    <Route path='/' element = {<LandingPage />} />
    <Route path='/planes' element = {<SelectYourPlan />} />
    <Route path='/login' element = {<Login/>} />
    <Route path='/signup' element = {<Register/>} />
    <Route path='/payment' element = {<Payment/>} />
    <Route path='/purchase' element = {<Purchase/>} />
    <Route path='/dashboard' element = {<Dashboard/>} />
    <Route path='/edit/:idplatillo' element = {<EditDish/>} />
    <Route path='/my_qr' element = {<p>my_qr</p>} />
    <Route path='/create-menu' element = {<MenuEditorPage />} />
    <Route path='/suscription' element = {<Sucription/>} />
    <Route path='/profile' element = {<CreateProfilePage />} />
    </Routes>
  </>
  )
}

export default App;