import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#F7F8F9" }} className="h-screen w-[375px] max-w-screen border-neutral-300">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
