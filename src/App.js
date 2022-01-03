import React from 'react';
import './App.css';
import Header from './components/header';
import hTabs from './components/tabs';
import Footer from './components/footer';


function App() {
  return (
    <div>
    <div className="app">
      <header className="app-header">
        {/* <img src={logo}  
           className="app-logo" alt="logo" 
          /> */}
        <Header />
      </header>
      <hTabs />
      </div>
    <div className='icons-List'><Footer/>
    </div></div>
  );
}

export default App;
