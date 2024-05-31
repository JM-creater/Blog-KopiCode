import { ConfigProvider, Tabs } from 'antd';
import './trendBlogs.css'
import BlogContainer from '../blogContainer';

// const { TabPane } = Tabs;

const TrendBlogs: React.FC = () => {
    return <>
            <ConfigProvider
            theme={{
                components: {
                Tabs: {
                    itemColor: 'white',
                    inkBarColor: '#64FD23',
                    itemActiveColor: '#64FD23',
                    itemSelectedColor: '#64FD23',
                    itemHoverColor:'#64FD23'
                },
                },
            }}
            >
            <Tabs id='tabs__container' tabPosition='left' animated={{ inkBar: true, tabPane: true }}>
                <Tabs.TabPane tab="Trending Blogs" key="1">
                    <span>Kopicode Most Trending Blogs</span>
                    <BlogContainer title={'Sample Blog Title'}></BlogContainer>
                </Tabs.TabPane>
                <Tabs.TabPane tab="View Other Blogs" key="2">
                    <BlogContainer title={'Sample Blog Title'}></BlogContainer>
                </Tabs.TabPane>
            </Tabs>
            </ConfigProvider>
        
    </>
}

export default TrendBlogs;