
import { Routes, Route } from 'react-router';
import './App.scss';
import CreateProfilePage from './Pages/CreateProfilePage';
import MenuEditorPage from './Pages/MenuEditorPage';
import SelectYourPlan from './Pages/SelectYourPlan';
import LandingPage from './Pages/LandingPage/LandingPage';
function App() {
  return (
  <>
    <Routes>
    <Route path='/' element = {<LandingPage />} />
    <Route path='/planes' element = {<SelectYourPlan />} />
    <Route path='/login' element = {<p>login</p>} />
    <Route path='/signup' element = {<p>signup</p>} />
    <Route path='/payment' element = {<p>payment</p>} />
    <Route path='/purchase' element = {<p>purchase</p>} />
    <Route path='/dashboard' element = {<p>dashboard</p>} />
    <Route path='/edit/:idplatillo' element = {<p>edit</p>} />
    <Route path='/my_qr' element = {<p>my_qr</p>} />
    <Route path='/create_menu' element = {<MenuEditorPage />} />
    <Route path='/suscription' element = {<p>suscription</p>} />
    <Route path='/profile' element = {<CreateProfilePage />} />
    </Routes>
  </>
  )
}

export default App;
