import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
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
import QRCodeVacancy from './components/layout/QRCodeVacancy'

function App() {
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);

  const handleOpenQRCode = () => setIsQRCodeOpen(true);
  const handleCloseQRCode = () => setIsQRCodeOpen(false);

  return (
    <div className="App">
      <Header />
      <Router>
        <main>
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
          <QRCodeVacancy isOpen={isQRCodeOpen} onClose={handleCloseQRCode} />
        </main>
        <footer>
          <Navbar onOpenQRCode={handleOpenQRCode} onClose={handleCloseQRCode}/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
