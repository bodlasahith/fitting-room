import React, { useState } from 'react';
import Landing from '../components/Landing';
import Upload from '../components/Upload';

export default function Home() {
  const [activePage, setActivePage] = useState('landing');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'landing' && <Landing navigateToPage={navigateToPage} />}
      {activePage === 'upload' && <Upload navigateToPage={navigateToPage} />}
    </>
  );
}
