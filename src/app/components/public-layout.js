import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Background from './background';
import PropTypes from 'prop-types';
import Header from './header';


PublicLayout.propTypes = {
  component: PropTypes.func,
}

function PublicLayout() {
    return <>
        <Header />
        <Routes>  
            <Route path = '*' element={<Home/>}/>
        </Routes>
        <Background/>
    </>
}

export default PublicLayout;