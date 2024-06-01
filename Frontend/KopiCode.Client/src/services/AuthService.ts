import { AxiosError } from "axios";
import { Register } from "../models/Register";
import { ErrorResponseData } from "../models/errors/Response";
import apiClient from "../api/apiClient";

export const register = async (userData: Register) => {
    try {
        const response = await apiClient.post('/auth/register', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        const axiosError = error as AxiosError<ErrorResponseData>;
        return {
            status: axiosError.response?.status || 500,
            data: axiosError.response?.data || { message: 'Error! Something went wrong.' },
        };
    }
}