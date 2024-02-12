import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hadar from './components/Hadar';
import Home from './components/Home';
import Login from './components/login';

function App() {
  const [cartLength, setCartLength] = useState(0);



  const ingressCount = () => {
    setCartLength(prev => prev + 1);
  };
  const renderHeader = !location.pathname.includes('/login');
  return (
    <Router>
      {renderHeader && <Hadar cartLength={cartLength} />}
      <Routes>
        <Route path="/" element={<Home handelCount={ingressCount} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
