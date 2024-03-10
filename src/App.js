import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from "./components/layout/Navbar"
import Home from './pages/Home'
import Notifications from './pages/Notifications'
import Account from './pages/Account'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notificacoes" element={<Notifications />} />
          <Route path="/conta" element={<Account />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
