import './App.css'
import TermekLista from './componets/termekLista'
import Loginfrom from './componets/LoginForm';
import UserFrom from './componets/UserFrom';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import MultiFrom from './componets/MultiFrom';
import AdminPage from './componets/AdminPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar class="navbar" />
      <Routes class="routes">
        <Route class="link" path="/" element={<Home/>} />
        <Route class="link" path="/login" element={<Loginfrom />} />
        <Route class="link" path="/user" element={<UserFrom />} />
        <Route class="link" path="/multiform" element={<MultiFrom />} />
        <Route class="link" path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer class="footer" />
    </Router>
  );
}

export default App