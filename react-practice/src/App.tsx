import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* Other components or content */}
    </div>
  );
}

export default App;
