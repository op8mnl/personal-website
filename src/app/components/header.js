import React from 'react';
import { NavLink } from 'react-router-dom';
import { isDesktop } from '../utils/window';

function Header() {
    const classNames = require('classnames');

    // CSS
    const nonDesktopClass = classNames({
        'row': true,
        'shadow-sm': true,
        'pt-3': true,
        'pb-lg-2': true,
        'pb-3': true,
        'px-3': true,
        'bg-blue': !isDesktop()
    });

    return (
        <>
            <div className={nonDesktopClass}>
                <div className='w-100 d-none d-lg-flex'>
                    <div className='col-lg-4 p-0'>
                        <NavLink to={Pages.HOME}>
                            <img src={JobsterBlueIcon} width='45'></img>
                            <img src={JobsterBlueText} height='40' className='ml-4 mt-2'></img>
                        </NavLink>
                    </div>
                    <div className='col-lg-2 d-flex align-items-center p-0'>
                    </div>
                </div>
                <div className='w-100 d-flex d-lg-none'>
                    <div className='col-8 p-0'>
                        <NavLink to={Pages.HOME}>
                            <img src={JobsterWhiteIcon} width='25'></img>
                            <img src={JobsterWhiteText} height='20' className='ml-2 mt-1'></img>
                        </NavLink>
                    </div>
                    <div className='col-4 p-0 text-right'>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;