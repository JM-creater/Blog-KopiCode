import { FormInstance, FormProps } from "antd";
import { Register } from "../Register";

export interface RegisterContextType {
    onSuccessSignUp: FormProps<Register>['onFinish'];
    onFailedSignUp: FormProps<Register>['onFinishFailed'];
    isLoading: boolean;
    form: FormInstance;
}

export interface UserAuthRegisterProps {
    children: React.ReactNode;
}