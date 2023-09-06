import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
        console.log(userAuth)
      } else {
        dispatch(logout);
      }
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
