import { Avatar, Button } from "antd";
import './blogsStyle.css'
import { MessageOutlined } from "@ant-design/icons";

const RelevantBlogs: React.FC = () => {
    return <>
        <div className="relevantBlog-container">
            <div className="blog-user">
                <Avatar/>
                <span>Username</span>
            </div>
            <h2 className="blog-title">Create A Sidebar Menu using HTML and CSS only</h2>
            <Button type="text" className="comments-button"><MessageOutlined />Add Comment</Button>
        </div>
    </>
};

export default RelevantBlogs;