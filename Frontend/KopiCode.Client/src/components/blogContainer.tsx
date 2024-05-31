import React from 'react';
import { Button, Card, CardProps } from 'antd';
import './styles/blog.css';
import { RightOutlined } from '@ant-design/icons';
//icons
// import { RightOutlined } from '@ant-design/icons'


interface MyCardProps extends CardProps {
    title: string,
    description: string;
  }


const BlogContainer: React.FC<MyCardProps> = ({title, description, ...props}) => (
    <Card
    id='card__blog'
      style={{ width: 330 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      {...props}
    >
      <h4>{title}</h4>
      <p>{description}</p>
      <Button ghost>Read Article<RightOutlined /></Button>
    </Card>
  );

export default BlogContainer;