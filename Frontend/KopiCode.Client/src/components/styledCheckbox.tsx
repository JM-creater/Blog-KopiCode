import { Checkbox, CheckboxProps, ConfigProvider } from "antd";
import React from "react";

interface MyCheckboxProps extends CheckboxProps {
    label: string;
  }

const StyledCheckbox: React.FC<MyCheckboxProps> = ({ label, ...props }) => {
    return <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#64FD23',
        colorText: 'white'
      },
    }}
  >
    <Checkbox {...props}>{label}</Checkbox>
  </ConfigProvider>
};

export default StyledCheckbox;