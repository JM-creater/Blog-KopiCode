import './signup.css'
import { Link } from 'react-router-dom';
import { Register } from '../../models/Register';
import { useRegister } from '../../hooks/useRegister';
import FilledButton from '../../components/Buttons/FilledButton';
import { Checkbox, Form, Input } from 'antd';
import webLogo from '../../components/logo-image/white-logo.png';
import Lottie from "lottie-react";
import SignUpAnimation from './signUpAnimations/signUp-animation.json';
import TextButton from '../../components/Buttons/TextButton';

const SignUp: React.FC = () => {

    const { onSuccessSignUp, onFailedSignUp, isLoading, form } = useRegister();

    return <>
    <div className="signUp__mainContent">
        <div className="signUp__content1">
            <Link to='/'><img title='Return to Main Screen' id='signUp__webLogo' src={webLogo} alt="weblogo for sign up page" /></Link>
            {/* SIGN UP FORM */}
            <h1 id='signUp__formHeader'>Let's Get Started</h1>
            <Form
                className='signUp__form'
                wrapperCol={{ span: 30 }}
                initialValues={{ remember: true }}
                onFinish={onSuccessSignUp}
                onFinishFailed={onFailedSignUp}
                autoComplete="off"
                form={form}
            >
                {/* INPUT  FIELD FOR FULL NAME */}
                <Form.Item<Register>
                    name='FullName'
                    rules={[{ required: true, message:'Please enter your Username' }]}>
                    <Input placeholder='Username' id='signUp__input' size='large'/>
                </Form.Item>
                    {/* INPUT FIELD FOR EMAIL */}
                <Form.Item<Register>
                    name='Email'
                    rules={[{ required: true, message:'Please enter your email' }]}>
                    <Input placeholder='Email' id='signUp__input' size='large'/>
                </Form.Item>
                    {/* INPUT  FIELD FOR PASSWORD */}
                <Form.Item<Register>
                    name='Password'
                    rules={[{ required: true, message:'Please set a password' }]}>
                    <Input placeholder='Password' id='signUp__input' size='large' />
                </Form.Item>
                    {/* TERMS AND CONDITION CHECKBOX */}
                <Form.Item<Register>
                    name='TermCondition' 
                    valuePropName="checked"
                    rules={[{ required: true, message:'You must agree to the terms' }]}>
                    <div className="terms-and-conditions-checkbox">
                        <Checkbox style={{color: 'white'}} id='signUp__checkbox'>I agree to the <a href="">Terms and Conditions</a></Checkbox>
                    </div>
                </Form.Item>
                <Form.Item>
                    <FilledButton id='signUp-button' label={'Sign Up'} htmlType='submit' loading={isLoading}></FilledButton>
                </Form.Item>
            </Form>
        </div>
        <div className="signUp__content2">
            <h1 id='signUp__content2Header'>Already have an Account?</h1>
            <Link to='/login'><TextButton label='Click here to Sign In'/></Link>
            <Lottie id='signUp__animation' animationData={SignUpAnimation}/>
        </div>
    </div>
    </>
    
}
export default SignUp;