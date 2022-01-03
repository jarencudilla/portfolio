import React from 'react';
import './styles/index.css';
import logo from './gamerdad1.jpg';
import Header from './components/header';
import HTabs from './components/tabs';
import Footer from './components/footer';


function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        <img src={logo}  
           className="app-logo" alt="logo" 
          />
        <Header />
      </header>
      <HTabs />
      </div>
    <div className='icons-List'><Footer/>
    </div>
    </div>
  );
}

export default App;
