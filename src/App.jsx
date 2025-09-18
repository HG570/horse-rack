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
import Settings from './pages/Settings'
import AboutApp from './pages/AboutApp'
import MyVacancies from './pages/MyVacancies'
import EditProfile from './pages/EditProfile'
import Accessibility from './pages/Accessibility'
import MyBikes from './pages/MyBikes'
import Support from './pages/Support'
import Policy from './pages/Policy'

function App() {
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const [myBikes, setMyBikes] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const handleOpenQRCode = () => setIsQRCodeOpen(true);
  const handleCloseQRCode = () => setIsQRCodeOpen(false);

  return (
    <div className="App">
      <Router>
        <QRCodeVacancy isOpen={isQRCodeOpen} bicycles={myBikes} onClose={handleCloseQRCode} onClick={false} />
        <header>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/bicicletarios" element={<Header />} />
            <Route path="/conta" element={<Header />} />
            <Route path='/notificacoes' element={<Header title="Notificações" />} />
            <Route path="/ciclista-cidadao" element={<Header title="Ciclista Cidadão" />} />
            <Route path="/paraciclos" element={<Header title="Paraciclos" />} />
            <Route path='/minhas-bicicletas' element={<Header title="Minhas Bicicletas" />} />
            <Route path='/vagas-ocupadas' element={<Header title="Vagas Ocupadas" />} />
            <Route path='/dados-pessoais' element={<Header title="Dados Pessoais" />} />
            <Route path='/configuracoes' element={<Header title="Configurações" />} />
            <Route path='/acessibilidade' element={<Header title="Acessibilidade" />} />
            <Route path='/sobre' element={<Header />} />
            <Route path='/signin' element={<Header />} />
            <Route path='/signup' element={<Header step={currentStep} setStep={setCurrentStep}/>} />
            <Route path='/atualizar-informacoes' element={<Header step={currentStep} setStep={setCurrentStep}/>} />
            <Route path='/esqueci-a-senha' element={<Header />} />
            <Route path='/suporte' element={<Header title="Suporte" />} />
            <Route path='/politica-privacidade' element={<Header title="Política de Privacidade" />} />
          </Routes>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notificacoes" element={<Notifications />} />
            <Route path="/conta" element={<Account />} />
            <Route path='/configuracoes' element={<Settings />} />
            <Route path='/minhas-bicicletas' element={<MyBikes />} />
            <Route path='/vagas-ocupadas' element={<MyVacancies />} />
            <Route path='/sobre' element={<AboutApp />} />
            <Route path='/dados-pessoais' element={<PersonalInfo />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/atualizar-informacoes' element={<EditProfile step={currentStep} setStep={setCurrentStep}/>} />
            <Route path='/signup' element={<SignUp step={currentStep} setStep={setCurrentStep}/>} />
            <Route path='/esqueci-a-senha' element={<ForgotPassword />} />
            <Route path="/acessibilidade" element={<Accessibility />} />
            <Route path="/bicicletarios" element={<BicycleRacks />} />
            <Route path='/ciclista-cidadao' element={<CitizenCyclist />} />
            <Route path='/paraciclos' element={<Paracycles />} />
            <Route path='/suporte' element={<Support />} />
            <Route path='/politica-privacidade' element={<Policy />} />
          </Routes>
        </main>
        <footer>
          <Navbar onOpenQRCode={handleOpenQRCode} myBicycles={setMyBikes} onClose={handleCloseQRCode} />
        </footer>
      </Router>
    </div>
  );
}

export default App;
