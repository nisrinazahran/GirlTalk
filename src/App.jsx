import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import Leaderboards from './pages/Leaderboards';
import NavBar from './components/Navigate';
import Loading from './components/Loading';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    );
  }

  return (
    <div className="app">
      <Loading />
      <header>
        <NavBar signOut={onSignOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/threads/:id" element={<DetailPage />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
