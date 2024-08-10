import React, { useState } from 'react';
import Landing from '../components/Landing';

export default function Home() {
  const [activePage, setActivePage] = useState('landing');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'landing' && <Landing />}
    </>
  );
}
