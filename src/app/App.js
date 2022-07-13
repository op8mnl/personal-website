import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import PublicLayout from './components/public-layout';


function App() {
  return (
    <div className='container-fluid d-flex flex-column vh-100'>
      <Router>
        <Routes>  
          <Route path = '*' element={<PublicLayout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
