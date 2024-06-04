/* eslint-disable @typescript-eslint/no-unused-vars */
import './NavigationBar.css';
import WebLogo from '../logo-image/dark-logo.png';
import OutlinedButton from '../Buttons/OutlinedButton';
import TextButton from '../Buttons/TextButton';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

//to make the navbar transparent when scrolling down
export default function NavigationBar (){
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById('navbar');
            // console.log('scroll event fired, window.scrollY:', window.scrollY); //debugging log
            if (window.scrollY > 0) {
                //console.log('Adding transparent class'); // Debugging log
                nav?.classList.add('transparent');
            } else {
                //console.log('Removing transparent class'); // Debugging log
                nav?.classList.remove('transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
    };
},[]);

    return (
        <>
            <nav id='navbar'>
                <Link to='/'><img src={WebLogo} alt="web logo dark color" id='webLogo' /></Link>
                <div className="nav__buttonGroup">
                    <Link to='/aboutUs'><TextButton label={'About Us'}/></Link>
                    <Link to='/login'><OutlinedButton label={'Sign In'}/></Link>
                </div>
            </nav>
            <div style={{ minHeight: '100%'}}>
                <Outlet />
            </div>
        </>
    );
}