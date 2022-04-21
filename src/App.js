import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import UserDetails from './Components/UserDetails';
import RefreshCTA from './Components/RefreshCTA';

import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getUser = () => {

      ApiService.get('/api').then(response => {
        const { results } = response?.data;
        setUserData(results[0])
        localStorage.setItem('userData', JSON.stringify(results[0]));
      });
    }
    
    getUser();
  }, [toggle]);

  const handleRefresh = () => {
    setUserData(null)
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <UserDetails userData={userData} />
      <RefreshCTA onClick={handleRefresh} />
    </div>
  );
}

export default App;
