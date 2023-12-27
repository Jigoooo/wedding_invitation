import React from 'react';

import './App.css';
import WeddingMainPage from './pages/main/WeddingMainPage';

function App() {
  const handleContextMenu: React.MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={'main-container'} onContextMenu={handleContextMenu}>
      <WeddingMainPage />
    </div>
  );
}

export default App;
