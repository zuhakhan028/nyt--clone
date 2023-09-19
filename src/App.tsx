import React from 'react';
import HeadLines from './components/middle-section/headlines';
import Footer from './components/footer/footer';
import './App.css';
import Header from './components/header/header';

function App() {
  

  return (
    <div className="App">
      <div className='inner-app-div'>
        <Header text={"WORLD NEWS"}/>
        <section className='middle-section'>
          <HeadLines />
          <Footer/>
        </section>
      
      </div>
    
    </div>
  );
}

export default App;
