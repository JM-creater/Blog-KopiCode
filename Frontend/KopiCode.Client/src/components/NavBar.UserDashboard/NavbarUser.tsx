import './NavbarUser.css'
// import logo from '../../components/logo-image/white-logo.png';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Input, Menu, MenuProps, Space } from 'antd';
import { CloseOutlined, MenuOutlined, HomeOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link to='' id='dropdown__item'>Profile</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link to='' id='dropdown__item'>My Notes</Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link to='' id='dropdown__item'>Sign Out</Link>
        ),
    },
];

const menu = (
    <Menu
        items={items}
        style={{ width: '150px', backgroundColor:'black' }} // Adjust the width here
    />
);

const NavbarUser: React.FC = () => {
    return <>
        <nav id='navbar__user'>
            {/* <img src={logo} alt="weblogo for user navbar" /> */}
            <Link to={'/userDashboard'} id='dashboard-logo'>KopiCode.</Link>
            <Input id='dashboard__search' placeholder='Search Topic'/>
            <label htmlFor="sidebar-active" className='open-sidebar-button'>
                <MenuOutlined />
            </label>
            <input type="checkbox" id='sidebar-active' />
            <ul>
                <label htmlFor="sidebar-active" className='close-sidebar-button'>
                    <CloseOutlined/>
                </label>
                <Link id='navLinks-user' to='/userDashboard'>
                    <li><HomeOutlined title='Home'/><span id='nav__text'>Home</span></li>
                </Link>
                <Link id='navLinks-user' to='/userDashboard'>
                    <li><FormOutlined title='Create Post'/><span id='nav__text'>Create Post</span></li>
                </Link>
                <Dropdown overlay={menu} trigger={['click']}>
                    <li onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Avatar size={35} className='user-avatar'><UserOutlined title='Profile'/></Avatar><span id='nav__text'>Profile</span>
                        </Space>
                    </li>
                </Dropdown>
            </ul>
        </nav>
        <div style={{ minHeight: '100%'}}>
            <Outlet />
        </div>
    </>
}

export default NavbarUser