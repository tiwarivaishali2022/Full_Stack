import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Voting from './components/Voting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/Navbar';
// import Adminhomepage from './components/adminhomepage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };
  return (
    <div >

      <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Voting' element={ <Voting />} />
        {/* <Route path='/Adminhomepage' element={ <Adminhomepage />} /> */}
        <Route path='/Login' element={ <Login handleAuthentication={handleAuthentication}/>} />
        <Route path='/Register' element={ <Register />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
