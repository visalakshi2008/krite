import React from 'react';
import { Button, Select, Table, Checkbox, Avatar, Tooltip, Space } from 'antd';
import { FilterOutlined, PhoneOutlined, SortAscendingOutlined, UserOutlined, AntDesignOutlined, SelectOutlined, BookOutlined, DeleteOutlined, PlusOutlined, CopyOutlined, DownOutlined, DownloadOutlined } from '@ant-design/icons';
import { Tag } from 'antd';




const { Column } = Table;
const { Option } = Select;

const dataSource = [
    {
        key: '1',
        name: 'John Brown',
        description: "description text for all ",
        address: 'New York No. 1 Lake Park',
        categories: ['category1', 'category1', 'category2'],
        tags: ["tags1", "tags3", "tag2"],
        meetingTime: ["40min"],

    },
    {
        key: '2',
        name: 'Jim Green',
        description: "description text for all ",
        address: 'London No. 1 Lake Park',
        categories: ['category5', 'category3'],
        tags: ["tags11", "tags31", "tag12"],
        meetingTime: ["1hr"]
    },
    {
        key: '3',
        name: 'Joe Black',
        description: "description text for all ",
        address: 'Sidney No. 1 Lake Park',
        categories: ['category7', 'category8', 'category 8'],
        tags: ["tags121", "tags3", "tag12"],
        meetingTime: ["20min",]
    },
    {
        key: '2',
        name: 'Jim Green',
        description: "description text for all ",
        address: 'London No. 1 Lake Park',
        categories: ['category5', 'category3'],
        tags: ["tags11", "tags31", "tag12"],
        meetingTime: ["1hr"]
    },
    {
        key: '3',
        name: 'Joe Black',
        description: "description text for all ",
        address: 'Sidney No. 1 Lake Park',
        categories: ['category7', 'category8', 'category 8'],
        tags: ["tags121", "tags3", "tag12"],
        meetingTime: ["20min",]
    },
    {
        key: '1',
        name: 'John Brown',
        description: "description text for all ",
        address: 'New York No. 1 Lake Park',
        categories: ['category1', 'category1', 'category2'],
        tags: ["tags1", "tags3", "tag2"],
        meetingTime: ["40min"],

    },

];

const TableData = () => {




    const getRandomColor = () => {
        const neonColors = ['green', 'black', 'red', 'orange', 'magenta', 'blue'];

        const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
        return randomColor;
    };



    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", paddingLeft: "10px", paddingRight: "10px" }}>

                <div >
                    <Select defaultValue="All Brands" style={{ width: 120, marginLeft: 8, marginRight: 8 }} >
                        <Option value="">All Brands</Option>
                        <Option value="Jack">Jack</Option>
                        <Option value="Lucy">Lucy</Option>
                        <Option value="Joe">Joe</Option>
                    </Select>
                    <Select defaultValue="Desk" style={{ width: 120, marginLeft: 8, marginRight: 8 }} >
                        <Option value="">Desk</Option>
                        <Option value="Jack">Jack</Option>
                        <Option value="Lucy">Lucy</Option>
                        <Option value="Joe">Joe</Option>
                    </Select>
                    <Select defaultValue="Tags" style={{ width: 120, marginRight: 8 }} >
                        <Option value="">Tags</Option>
                        <Option value="Jack">Jack</Option>
                        <Option value="Lucy">Lucy</Option>
                        <Option value="Joe">Joe</Option>
                    </Select>
                    <Button ><SortAscendingOutlined />Sort</Button>
                    <Button style={{ marginLeft: "10px" }}><FilterOutlined />Filter</Button>
                </div>


                <div  >
                    <Button style={{ marginRight: "10px" }}><PhoneOutlined />Meeting</Button>
                    <Button>
                        <DownloadOutlined />Import/Export
                    </Button>
                </div>
            </div>
            <div>
                <Table dataSource={dataSource} pagination={false}>
                    <Column
                        title={
                            <Space>
                                <Checkbox style={{ marginRight: 8 }} />Brand
                                <CopyOutlined />
                            </Space>
                        }
                        dataIndex="name"
                        key="name"
                        render={(text, record) => (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span><Checkbox style={{ marginRight: 8 }} />{text}</span>
                                <CopyOutlined style={{ marginLeft: 10 }} />
                            </div>
                        )}
                    />
                    <Column title="Description" dataIndex="description" key="description" />
                    <Column
                        title="Members"
                        dataIndex="address"
                        key="address"
                        render={(text, record) => (
                            <Avatar.Group>
                                <Avatar src={record.avatar1} />
                                <a href={record.avatar2Link}>
                                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                </Tooltip>
                                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                            </Avatar.Group>
                        )}
                    />

                    <Column
                        title="Categories"
                        dataIndex="categories"
                        key="categories"
                        render={(tags) => (
                            <>
                                {tags.map((tag, index) => (
                                    <span key={tag}>
                                        <Tag key={tag} style={{ border: `1px solid ${getRandomColor()}`, color: getRandomColor(), marginLeft: 6 }}>
                                            {tag}
                                        </Tag>

                                    </span>
                                ))}
                            </>
                        )}
                    />

                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={(tags) => (
                            <>
                                {tags.map((tag) => (
                                    <Tag key={tag} style={{ marginLeft: 6 }}>
                                        {tag}
                                    </Tag>

                                ))}
                            </>
                        )}
                    />

                    <Column
                        title={
                            <Space>
                                Next Meeting
                                <PlusOutlined />
                            </Space>
                        }
                        dataIndex="meetingTime"
                        key="meetingTime"
                        render={(tags) => (
                            <>
                                {tags.map((tag) => (
                                    <Tag key={tag} style={{ border: `1px solid ${getRandomColor()}`, color: getRandomColor(), marginLeft: 6 }}>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                </Table>
            </div>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px", gap: 6 }}>
                <Button><SelectOutlined />Selected</Button>
                <Button><BookOutlined /> Archive</Button>
                <Button><DeleteOutlined /> Delete</Button>
                <Button>More<DownOutlined /></Button>
            </div>
        </>
    );
};

export default TableData;
