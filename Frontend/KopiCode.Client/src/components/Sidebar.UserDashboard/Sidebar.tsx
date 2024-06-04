import { Outlet } from 'react-router';
import './Sidebar.css'
import Logo from '../logo-image/white-logo.png';

const Sidebar: React.FC = () => {
    return (
        <>
        <div id='user__container'>
            <div className="sidebar">
                <img src={Logo} alt="web logo for sidebar" />
            </div>
            <Outlet/>
        </div>
        </>
    )
};

export default Sidebar;