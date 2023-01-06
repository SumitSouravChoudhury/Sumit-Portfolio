import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="icon">
        <a href="https://instagram.com/sumitc.86?igshid=ZDdkNTZiNTM=">Instagram <i className="fa fa-instagram"
          aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/sumit-sourav-choudhury-946aa9227">LinkedIn <i className="fa fa-linkedin"
          aria-hidden="true"></i></a>
        <a href="https://twitter.com/SumitSChoudhury?t=zmgONz34IhNtt6qKmOeZdg&s=09">Twitter <i className="fa fa-twitter"
          aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100076879086361">Facebook <i className="fa fa-facebook"
          aria-hidden="true"></i></a>
      </div>
      <div className='comment'>
        <Link to='/contact'><i className="fa fa-comments" aria-hidden="true"></i></Link>
      </div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
