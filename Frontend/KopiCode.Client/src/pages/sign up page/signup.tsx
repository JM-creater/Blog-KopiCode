import { Button, Form, Input } from 'antd';
import NavigationBar from '../../components/Navbar Landing/NavigationBar';
import './signup.css'
import { Link } from 'react-router-dom';
import { Register } from '../../models/Register';
import { useRegister } from '../../hooks/useRegister';

const SignUp: React.FC = () => {

    const { onSuccessSignUp, onFailedSignUp, isLoading, form } = useRegister();

    return <>
    <NavigationBar/>
        <div className="signup-container">
            <h1 id='signup-text'>Create Your Account</h1>
            {/* SIGN UP FORM */}
            <Form
                className='signUpForm'
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
                    rules={[{ required: true, message:'Please enter your full name' }]}>
                    <Input placeholder='First Name, Last Name' id='signUp-input' size='large'/>
                </Form.Item>
                    {/* INPUT FIELD FOR EMAIL */}
                <Form.Item<Register>
                    name='Email'
                    rules={[{ required: true, message:'Please enter your email' }]}>
                    <Input placeholder='Email' id='signUp-input' size='large'/>
                </Form.Item>
                    {/* INPUT  FIELD FOR PASSWORD */}
                <Form.Item<Register>
                    name='Password'
                    rules={[{ required: true, message:'Please set a password' }]}>
                    <Input placeholder='Password' id='signUp-input' size='large' />
                </Form.Item>
                    {/* TERMS AND CONDITION CHECKBOX */}
                <Form.Item<Register>
                    name='TermCondition' 
                    valuePropName="checked"
                    rules={[{ required: true, message:'You must agree to the terms' }]}>
                    <div className="terms-and-conditions-checkbox">
                    </div>
                </Form.Item>
                {/* GO TO SIGN IN BUTTON */}
                <span id='already-have-span' title='Return to Sign In Page'>Already have an account? <Link to='/login' id='already-registered-btn'> Click here to sign in.</Link></span>
                <Form.Item>
                    <Button id='sign-up-btn' htmlType='submit' loading={isLoading}>Submit</Button>
                    {/* <FilledButton label={'Sign Up'} /> */}
                </Form.Item>
            </Form>
        </div>
    </>
    
}
export default SignUp;