import React from 'react'
import { ConfigProvider, Flex, Tag } from 'antd'
import './categories.css'

const tagsCategory = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const Categories: React.FC = () => {
    const [selectedTags, setSeleactedTags] = React.useState<string[]>(['']);
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter((t) => t !== tag);
    console.log('You selected the category: ', nextSelectedTags);
    setSeleactedTags(nextSelectedTags);
    };

    return (
        <div className="category__container">
            <ConfigProvider
                    theme={{
                        token: {
                            fontSize: 20,
                            colorPrimaryHover: '#64FD23',
                            colorPrimaryActive: '#64FD23',
                            colorPrimary: '#64FD23',
                            colorFillSecondary:'black',
                            colorTextLightSolid: 'black',
                        },
                        components: {
                        Tag: {
                            defaultColor:'white',
                        },
                        },
                    }}>
                <Flex gap={20} wrap align="center">
                    {tagsCategory.map<React.ReactNode>((tag) => (
                    <Tag.CheckableTag key={tag} checked={selectedTags.includes(tag)} onChange={(checked) => handleChange(tag, checked)}>
                        {tag}
                    </Tag.CheckableTag>
                    ))}
                </Flex>
            </ConfigProvider>
        </div>
       
    );
};

export default Categories;