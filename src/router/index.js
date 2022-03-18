import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from '../containers/Header';
import Footer from '../components/Footer';
import routes from './routes';

const index = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
        {
          routes.map((route) => (
            <Route {...route} />
          ))
        }
        </Routes>
        <Footer />
      </div>
    </Router> 
  )
}

export default index;