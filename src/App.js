import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import FeedBack from './components/Feedback';
import About from './components/About';

import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Feature />
      <Service />
      <About />
      <FeedBack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
