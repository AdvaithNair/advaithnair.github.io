import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
