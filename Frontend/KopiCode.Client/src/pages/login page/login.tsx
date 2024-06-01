import { Button, Form, Input } from "antd";
import NavigationBar from "../../components/Navbar Landing/NavigationBar";
import './login.css'
import type { FormProps } from "antd";
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from './lottie animation/dog-animetion.json';

type LoginFieldType = {
    email?: string;
    password?: string;
};

const onFinish: FormProps<LoginFieldType>['onFinish'] = (values) => {
    console.log('Successfully logged in!', values);
};

const onFinishFailed: FormProps<LoginFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Invalid account!', errorInfo);
};

const Login: React.FC = () => (
    <>
        <NavigationBar/>
        {/* contains the form and image */}
        <div className="login-content-container">
            {/* container for the form and buttons */}
            <div className="form-container">
                <span id="greeting">Welcome Back!</span>
                {/* LOGIN FORM WITH INPUT FIELDS FOR EMAIL AND PASSWORD */}
                <Form
                name="login"
                id="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                    
                    {/* Email */}
                    <Form.Item<LoginFieldType>
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email!' }]}>
                        <Input id="login-input" placeholder="Email" size="large"/>
                    </Form.Item>
                    {/* Password */}
                    <Form.Item<LoginFieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}>
                        <Input  id="login-input"  placeholder="Password" size="large"/>
                    </Form.Item>
                </Form>
                {/* BUTTONS FOR FORGOT PASSWORD, CREATE, AND SIGN IN */}
                <div className="login-btn-group">
                    <Button type='text' id="forgotPass">Forgot Password?</Button>
                    {/* redirects user to sign up page */}
                    <Link to='/signup'><Button type='text' id="createAcc">Don't have an account yet? Create one now!</Button></Link>
                </div>
                <span id="motto">Sip.Code.Connect.</span>
            </div>
            <Lottie id="login-animation" animationData={animation} />
        </div>
    </>
);

export default Login