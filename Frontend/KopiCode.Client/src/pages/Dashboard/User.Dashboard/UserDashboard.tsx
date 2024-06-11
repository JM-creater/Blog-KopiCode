
import { Tabs } from 'antd';
import './userDashboard.css'
import RelevantBlogs from '../../../components/Blogs.Component/RelevantBlogs';
// import sample from './wuthering-waves.jpg';

const { TabPane } = Tabs;

const UserDashboard: React.FC = () => {
    return <>
    <div className="userDashboard__container">
        <Tabs defaultActiveKey='1' className='blogs-tabs'>
            <TabPane tab='Relevant' className='tab' key={1}>
                <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
            </TabPane>
            <TabPane tab='Latest' className='tab' key={2}>
            <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
            </TabPane>
            <TabPane tab='Top' className='tab' key={3}>
            <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
                <RelevantBlogs></RelevantBlogs>
            </TabPane>
        </Tabs>
        <div className="createNotes-container">
            <h1>test</h1>
        </div>
    </div>
    </>
};

export default UserDashboard;