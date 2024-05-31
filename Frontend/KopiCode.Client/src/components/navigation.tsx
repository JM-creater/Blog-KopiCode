/* eslint-disable @typescript-eslint/no-unused-vars */
import logo from '../assets/images/kopicode.png'
//Andtdesign
import { Button, ConfigProvider } from 'antd';
//Stylesheet
import './styles/nav.css'
import { Link, Outlet } from 'react-router-dom';

export default function Navigation (){
    return <nav>
        {/* ant design */}
        <ConfigProvider
            theme={{
                components: {
                Button: {
                    defaultBg: 'transparent',
                    defaultColor: '#ffffff',
                    defaultBorderColor: 'transparent',
                    defaultHoverBorderColor: 'transparent',
                    defaultGhostBorderColor: 'white',
                    defaultHoverBg: 'transparent',
                    defaultHoverColor: '#64FD23',
                    defaultActiveColor: '#2F9D00',
                    defaultActiveBg: 'transparent'
                },
                },
            }}
            >
                {/* redirects users to landing page when clicked */}
            <Link to="/"><img src={logo} alt="kopicode web logo"/></Link>
            <ul>
                <li><Button>About Us</Button></li>
                <li><Link to="/login"><Button ghost>Sign In</Button></Link></li>
            </ul>
        </ConfigProvider>
        <Outlet />
    </nav>
}