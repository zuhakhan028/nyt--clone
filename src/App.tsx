import React from 'react';
import HeadLines from './components/headlines/headlines';
import Footer from './components/footer/footer';
import './App.css';
import Header from './components/header/header';


// App Component
const App:React.FC =() =>{
  return (
    <div className="App">
      <div className='inner-app-div'>
        <Header text={"WORLD NEWS"} />
        <main className='main'>
          <HeadLines />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
