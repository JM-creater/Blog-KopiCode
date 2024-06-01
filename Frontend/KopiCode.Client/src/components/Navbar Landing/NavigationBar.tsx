/* eslint-disable @typescript-eslint/no-unused-vars */
import './NavigationBar.css';
import WebLogo from '../logo-image/dark-logo.png';
import OutlinedButton from '../Buttons/OutlinedButton';
import TextButton from '../Buttons/TextButton';
import { Link } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';

export default function NavigationBar (){
    return <nav>
        <Link to='/'><img src={WebLogo} alt="web logo dark color" id='webLogo' /></Link>
        <div className="nav__buttonGroup">
            <Link to='/aboutUs'><TextButton label={'About Us'}/></Link>
            <Link to='/signup'><OutlinedButton label={'Sign In'}/></Link>
        </div>
    </nav>
}