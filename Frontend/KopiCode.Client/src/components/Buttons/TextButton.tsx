import React from "react";
import './buttons.css'
import { Button } from "antd";
import { ButtonProps } from 'antd/lib/button';

interface TextButtonProps extends ButtonProps {
    label: string;
}

const TextButton: React.FC<TextButtonProps> = ({label}) => {
    return (
        <Button type="text" id="TextButton">{label}</Button>
    );
};

export default TextButton;