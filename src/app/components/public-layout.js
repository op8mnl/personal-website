import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import PropTypes from 'prop-types';

PublicLayout.propTypes = {
  component: PropTypes.func,
}

function PublicLayout() {
    return <>
        {/* <Header /> To be implemented if necessary*/}
            <Routes>  
                <Route path = '*' element={<Home/>}/>
            </Routes>
       {/* <Footer />  To be implemented if necessary*/}
    </>
}

export default PublicLayout;