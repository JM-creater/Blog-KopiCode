import { Avatar } from "antd";
import './blogsStyle.css'

const RelevantBlogs: React.FC = () => {
    return <>
        <div className="relevantBlog-container">
            <div className="blog-user">
                <Avatar/>
                <span>Username</span>
            </div>
            <h2 className="blog-title">Create A Sidebar Menu using HTML and CSS only</h2>
        </div>
    </>
};

export default RelevantBlogs;