import React from 'react';
import { FloatButton, Tabs, Input, Button } from 'antd';
import './userDashboard.css'
import RelevantBlogs from '../../../components/Blogs.Component/RelevantBlogs';
import headerAnimation from '../../login page/lottie animation/dog-animetion.json';
import Lottie from 'lottie-react';
// import sample from './wuthering-waves.jpg';

const { TextArea } = Input;
const { TabPane } = Tabs;

const UserDashboard: React.FC = () => {
    return <>
    <div className='dashboard__hero'>
        <h1 id='hero-text'>"Focus is the key to debugging: a single line of code can make all the difference."</h1>
        <Lottie animationData={headerAnimation} className='dashboard__header-animation'/>
    </div>
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
            <span id='dashboard__createNotes'>Create Notes</span>
            <TextArea className='textArea-note' placeholder='Enter your notes here' rows={20}/>
            <Button type='primary'>Save Note</Button>
        </div>
        <FloatButton.BackTop />
    </div>
    </>
};

export default UserDashboard;