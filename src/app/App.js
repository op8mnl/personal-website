import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import PublicLayout from './components/public-layout';

function App() {
  return (
    <div className='container-fluid d-flex flex-column vh-2' style={{overflowX:'hidden'}}>
      <div className='row'>
        <Router>
          <Routes>  
            <Route path = '*' element={<PublicLayout/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
