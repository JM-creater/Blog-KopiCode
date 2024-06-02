import { Button } from "antd";
import { ButtonProps } from 'antd/lib/button';
import React from "react";

interface FilledButtonDarkProps extends ButtonProps{
    label: string;
}

const FilledButtonDark: React.FC<FilledButtonDarkProps> = ({label}) => {
    return <Button size="large" className="FilledButtonDark">{label}</Button>
};

export default FilledButtonDark;