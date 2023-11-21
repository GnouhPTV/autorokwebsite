import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import FeedBack from './components/Feedback';
import About from './components/About';
import Commit from './components/Commit';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Feature />
      <About />
      <Commit />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;