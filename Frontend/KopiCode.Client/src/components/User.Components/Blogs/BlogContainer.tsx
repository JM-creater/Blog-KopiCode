import { Avatar } from 'antd';
import './BlogContainer.css'


const BlogContainer: React.FC = () => {
    return <>
        <div id='blog__container'>
            <div className="blog__userInfo">
                <Avatar size={'large'}/>
                <span>Username</span>
            </div>
        </div>
    </>
};

export default BlogContainer;