import React from 'react';
import { Button, ButtonProps, ConfigProvider } from 'antd';

interface MyButtonProps extends ButtonProps {
  label: string;
}

const FilledButton: React.FC<MyButtonProps> = ({ label, ...props }) => {
  return <ConfigProvider
            theme={{
                components: {
                Button: {
                    defaultBg: '#64FD23',
                    contentFontSize: 18,
                    defaultBorderColor: '#64FD23',
                    defaultHoverBorderColor: '#64FD23',
                    defaultHoverColor: '#64FD23',
                    defaultHoverBg: '#2D9800',
                    fontWeight: 600,
                    paddingInlineLG: 40,
                    defaultActiveColor: '#64FD23',
                    defaultActiveBorderColor: 'black',
                    defaultActiveBg: 'black'
                },
                },
            }}
            >
            <Button size='large'{...props}>{label}</Button>;

        </ConfigProvider>
 };

export default FilledButton;


