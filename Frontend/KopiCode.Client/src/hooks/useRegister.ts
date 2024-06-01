import { useContext } from "react";
import { UserAuthRegisterContext } from "../state/RegisterState";

export const useRegister = () => {
    const context = useContext(UserAuthRegisterContext);
    if (context === null) {
        throw new Error("useRegister must be used within a ModalProvider");
    }
    return context;
}