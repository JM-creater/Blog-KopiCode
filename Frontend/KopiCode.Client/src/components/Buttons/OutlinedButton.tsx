import React from "react";
import './buttons.css'
import { Button } from "antd";

interface OutlinedButtonProps {
    label: string;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({label}) => {
    return (
        <Button ghost id="OutlinedButton">{label}</Button>
    );
};

export default OutlinedButton;