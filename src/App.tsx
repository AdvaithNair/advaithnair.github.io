import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Tech from './components/Tech';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Tech />
    </div>
  );
}

export default App;
