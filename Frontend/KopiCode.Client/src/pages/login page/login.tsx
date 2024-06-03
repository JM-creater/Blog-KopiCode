import { Button, Form, Input } from "antd";
import './login.css'
import type { FormProps } from "antd";
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from './lottie animation/dog-animetion.json';
import FilledButton from "../../components/Buttons/FilledButton";
import NavigationBar from '../../components/Navbar.Landing/NavigationBar'

type LoginFieldType = {
    username?: string;
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
    <div className="login__mainContent">
        <div className="login__content1">
            {/* container for the form*/}
            <div className="login__form">
                <h2 id="login__formHeader">Sign In</h2>
                {/* LOGIN FORM WITH INPUT FIELDS FOR USERNAME AND PASSWORD */}
                <Form
                name="login"
                id="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                    
                    {/* Username */}
                    <Form.Item<LoginFieldType>
                        name="username"
                        rules={[{ required: true, message: 'Please enter your email!' }]}>
                        <Input id="login-input" placeholder="Username" size="large"/>
                    </Form.Item>
                    {/* Password */}
                    <Form.Item<LoginFieldType>
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}>
                        <Input  id="login-input"  placeholder="Password" size="large"/>
                    </Form.Item>
                </Form>
                {/* BUTTONS FOR FORGOT PASSWORD, CREATE, AND SIGN IN */}
                <Button title="click here to reset password" type='text' id="login__forgotPassButton">Forgot Password?</Button>
                <Link to='/signup'><Button title="Click here to create an account" type='text' id="login__createAccountButton">Don't have an account yet?</Button></Link>
                <FilledButton id="login__signInButton" label="Sign In"/>
            </div>
        </div>
        <div className="login__content2">
            <Lottie id="login__animation" animationData={animation} />
            <span id="login__catchPhrase">Sip.Code.Connect.</span>
        </div>
    </div>
    </>
);

export default Login