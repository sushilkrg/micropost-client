import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Trends from './components/Trends';
import TopNavigationBar from './components/TopNavigationBar';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';
import Notifications from './pages/Notifications';
import Bookmarks from './pages/Bookmarks';
import Footer from './components/Footer';

const App = () => {

  const { user } = useSelector(store => store.user);
  console.log(user);
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {user && <TopNavigationBar />}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {user && <Sidebar />}
          <Routes>
            <Route path="/" element={user ? <MainContent /> : <Navigate to="/login" />} />
            <Route path="/profile/:username" element={user ? <Profile /> : <Navigate to="/login" />} />
            {/* <Route path="/profile/:username" element={<Profile />} /> */}
            <Route path="/notifications" element={user ? <Notifications /> : <Navigate to="/login" />} />
            <Route path="/bookmarks" element={user ? <Bookmarks /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/logout" element={<Navigate to="/login" />} />
          </Routes>
          {user && <Trends />}
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
