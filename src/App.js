import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from "./components/layout/Navbar"
import Home from './pages/Home'
import Notifications from './pages/Notifications'
import Account from './pages/Account'
import Vacancies from './pages/Vacancies'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import PersonalInfo from './pages/PersonalInfo'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notificacoes" element={<Notifications />} />
          <Route path="/conta" element={<Account />} />

          <Route path='/personal-info' element={<PersonalInfo />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />

          <Route path="/vagas" element={<Vacancies />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
