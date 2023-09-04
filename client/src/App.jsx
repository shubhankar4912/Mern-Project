import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/SignIn';
import SignUP from './pages/SignUP';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  {/* header */}
  <Header />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<SignUP/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>

  </BrowserRouter>
  
}
