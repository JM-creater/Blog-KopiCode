import { Button } from "antd";
import { ButtonProps } from 'antd/lib/button';
import React from "react";

interface FilledButtonProps extends ButtonProps{
    label: string;
}

const FilledButton: React.FC<FilledButtonProps> = ({label}) => {
    return <Button size="large" className="FilledButton">{label}</Button>
};

export default FilledButton;