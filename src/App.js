import React from 'react';
import HomeScreen from './screens/HomeScreen'
import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';



function App() {
  const user = null;
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
