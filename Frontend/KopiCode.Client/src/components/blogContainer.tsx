import React from 'react';
import { Button, Card, CardProps } from 'antd';
import './styles/blog.css';
import { RightOutlined } from '@ant-design/icons';
//icons
// import { RightOutlined } from '@ant-design/icons'


interface MyCardProps extends CardProps {
    title: string,
  }


const BlogContainer: React.FC<MyCardProps> = ({title, ...props}) => (
    <Card
    className='card__blog'
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      {...props}
    >
      <h4>{title}</h4>
      <Button id='blog__read' type='text'>Read Article <RightOutlined/></Button>
    </Card>
  );

export default BlogContainer;