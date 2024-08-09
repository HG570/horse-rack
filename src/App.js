import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from "./components/layout/Navbar"
import Home from './pages/Home'
import Notifications from './pages/Notifications'
import Account from './pages/Account'
import BicycleRacks from './pages/BicycleRacks'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import PersonalInfo from './pages/PersonalInfo'
import CitizenCyclist from './pages/CitizenCyclist'
import Paracycles from './pages/Paracycles'
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <main className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notificacoes" element={<Notifications />} />
          <Route path="/conta" element={<Account />} />

          <Route path='/personal-info' element={<PersonalInfo />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />

          <Route path="/bicicletarios" element={<BicycleRacks />} />
          <Route path='/ciclista-cidadao' element={<CitizenCyclist />} />
          <Route path='/paraciclos' element={<Paracycles />} />
        </Routes>
        </main>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
