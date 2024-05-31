import { Form, Input } from 'antd';
import type { FormProps } from "antd";
import Navigation from '../../components/navigation';
import './signup.css'
import { Link } from 'react-router-dom';
import StyledCheckbox from '../../components/styledCheckbox';
import FilledButton from '../../components/filledButton';
// import { useState } from 'react';

type SignUpFieldType = {
    fullname?: string
    email?: string,
    password?: string,
};

const onSuccessSignUp: FormProps<SignUpFieldType>['onFinish'] = (values) => {
    console.log('Successfully Signed Up!', values);
};

const onFailedSignUp: FormProps<SignUpFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed to Sign Up!', errorInfo);
};

const SignUp: React.FC = () => {
    return <>
    <Navigation/>
        <div className="signup-container">
            <h1 id='signup-text'>Create Your Account</h1>
            {/* SIGN UP FORM */}
            <Form
                className='signUpForm'
                wrapperCol={{ span: 30 }}
                initialValues={{ remember: true }}
                onFinish={onSuccessSignUp}
                onFinishFailed={onFailedSignUp}
                autoComplete="off">
                {/* INPUT  FIELD FOR FULL NAME */}
                <Form.Item<SignUpFieldType>
                    name='fullname'
                    rules={[{ required: true, message:'Please enter your full name' }]}>
                    <Input placeholder='First Name, Last Name' id='signUp-input' size='large'/>
                </Form.Item>
                    {/* INPUT FIELD FOR EMAIL */}
                <Form.Item<SignUpFieldType>
                    name='email'
                    rules={[{ required: true, message:'Please enter your email' }]}>
                    <Input placeholder='Email' id='signUp-input' size='large'/>
                </Form.Item>
                    {/* INPUT  FIELD FOR PASSWORD */}
                <Form.Item<SignUpFieldType>
                    name='password'
                    rules={[{ required: true, message:'Please set a password' }]}>
                    <Input placeholder='Password' id='signUp-input' size='large'/>
                </Form.Item>
                    {/* TERMS AND CONDITION CHECKBOX */}
                <div className="terms-and-conditions-checkbox">
                    <StyledCheckbox label='I have read and accept the'/><a href="">Terms and Conditions</a>
                </div>
                    {/* GO TO SIGN IN BUTTON */}
                <span id='already-have-span' title='Return to Sign In Page'>Already have an account? <Link to='/login' id='already-registered-btn'> Click here to sign in.</Link></span>
                <FilledButton label={'Sign Up'} id='sign-up-btn'/>
            </Form>
    </div>
    </>
    
}
export default SignUp;