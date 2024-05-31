import { Button, Form, Input } from "antd";
import Navigation from "../../components/navigation"
import './login.css'
import type { FormProps } from "antd";
import image from '../web images/web-image.png'
import FilledButton from "../../components/filledButton";
import { Link } from 'react-router-dom';

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
    <div className="login-container">
        <Navigation/>
        {/* contains the form and image */}
        <div className="login-content-container">
            {/* container for the form and buttons */}
            <div className="form-container">
                <span id="greeting">WELCOME BACK BREWSKIE!</span>
                {/* login form */}
                <Form
                name="login"
                id="loginForm"
                wrapperCol={{ span: 15 }}
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
                    <FilledButton label="Sign In"/>
                </div>
                <span id="motto">Sip.Code.Connect.</span>
            </div>
            {/* End of form container */}
            {/* <div className="login-image-container"> */}
                <img src={image} alt="kopicode mascot" id="kopicode-image"/>
            {/* </div> */}
        </div>
    </div>
);

export default Login