import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';



function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
      } else { }
    });

    return () => { unsubscribe(); }
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (< LoginScreen />) : (
          <Routes>
            <Route path="/" element={<HomeScreen />}>
            </Route>
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
