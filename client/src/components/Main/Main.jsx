import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import LandingPage from './LandingPage';
import Profile from './Profile';
import useWeb3 from '../hooks/useWeb3'
const Main = () => {
  const { walletAddress } = useWeb3()
  return (
    <main>
      <Routes>
          {walletAddress ? 
            (<>
              <Route path="/profile" element={<Profile />} />
              <Route path="/gallery" element={<Gallery />} />
              </>
              )
            :
          ((alert("You must connect a wallet"))
            )}
            <Route path="/" element={<LandingPage />} />
            </Routes>
    </main>
  );
};

export default Main;
