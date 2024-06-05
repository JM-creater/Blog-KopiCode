import './NavbarUser.css'
import logo from '../../components/logo-image/white-logo.png';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const NavbarUser: React.FC = () => {
    return <>
        <nav id='navbar__user'>
            <img src={logo} alt="weblogo for user navbar" />
            <Input id='dashboard__search' placeholder='Search Topic'/>
            <label htmlFor="sidebar-active" className='open-sidebar-button'>
                <MenuOutlined />
            </label>
            <input type="checkbox" id='sidebar-active' />
            <ul>
                <label htmlFor="sidebar-active" className='close-sidebar-button'>
                    <CloseOutlined/>
                </label>

                <Link id='navLinks-user' to='/userDashboard'><li>Home</li></Link>
                <Link id='navLinks-user' to='/userDashboard'><li>Notes</li></Link>
                <Link id='navLinks-user' to='/userDashboard'><li>Profile</li></Link>
            </ul>
        </nav>
        <div style={{ minHeight: '100%'}}>
            <Outlet />
        </div>
    </>
}

export default NavbarUser