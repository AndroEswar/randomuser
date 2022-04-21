import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';

import './App.css';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUser = async () => {

      const response = await ApiService.get('/api');
      console.log(response);
    }
    getUser();
  }, [])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
