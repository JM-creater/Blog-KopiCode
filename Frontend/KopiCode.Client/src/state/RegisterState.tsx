import { createContext, useState } from "react";
import { RegisterContextType, UserAuthRegisterProps } from "../models/types/RegisterContextType";
import { Form, FormProps } from "antd";
import { Register } from "../models/Register";
import { register } from "../services/AuthService";
import { showFailedToast, showSuccessToast } from "../utils";

export const UserAuthRegisterContext = createContext<RegisterContextType | null>(null);

export const UserAuthRegisterProvider: React.FC<UserAuthRegisterProps> = ({ children }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form] = Form.useForm();

    const onSuccessSignUp: FormProps<Register>['onFinish'] = async (values) => {
        setIsLoading(true);
        
        try {
            const response = await register(values);
            if (response.status === 200) {
                form.resetFields();
                showSuccessToast("Register Successful!");
            } else {
                showFailedToast(response.data.message || "Failed to Register.");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    
    const onFailedSignUp: FormProps<Register>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed to Sign Up!', errorInfo);
    };

    const HandleValues = {
        onSuccessSignUp,
        onFailedSignUp,
        isLoading,
        form
    };

    return (
        <UserAuthRegisterContext.Provider value={HandleValues}>
            {children}
        </UserAuthRegisterContext.Provider>
    )
}