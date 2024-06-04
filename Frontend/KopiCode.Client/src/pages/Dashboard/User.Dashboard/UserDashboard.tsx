import { Input } from 'antd';
import './userDashboard.css'
import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import BlogContainer from '../../../components/User.Components/Blogs/BlogContainer';

const UserDashboard: React.FC = () => {
    return <>
    <div className="userDashboard__container">
        <div className="user__content" id="content1">
            <Input placeholder='Search Topic' id='dashboard__searchInput'/>
            <header id='dashboard__header'>
                <h2>Brew Ideas,</h2>
                <h2>Code Solutions.</h2>
                <p>Kopicode is a community-driven blog platform where programmers share their coding experiences, tackle challenges together, and grow through collective knowledge.</p>
            </header>
            <div className="dashboard__contacts">
            <h5>Contact Us Through:</h5>
                <InstagramFilled id='dashboard__socialsIcon'/>
                <LinkedinFilled id='dashboard__socialsIcon'/>
                <GithubFilled id='dashboard__socialsIcon'/>
                <FacebookFilled id='dashboard__socialsIcon'/>
            </div>
        </div>
        <div className="user__content" id="content2">
            <BlogContainer/>
            <BlogContainer/>
        </div>
    </div>
    </>
};

export default UserDashboard;