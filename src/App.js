import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from "./components/layout/Navbar"
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
