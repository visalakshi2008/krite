import React from 'react';
import { AppstoreOutlined, CustomerServiceOutlined, FolderOutlined, MailOutlined, QuestionOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu, Typography } from 'antd';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Design Team', 'sub1', <MailOutlined />, [
    ]),
    getItem('Marketing Team', 'sub2', <AppstoreOutlined />, [
    ]),
    getItem('Development Team', 'dev', <AppstoreOutlined />, [
    ]),

    {
        type: 'divider',
    },
    getItem('Create a Team', 'sub4', <SettingOutlined />, [
    ]),
    getItem('Folders', 'grp', <FolderOutlined />, [
        getItem('Products', '13', null, [
            getItem('Roadmap', 'roadmap'),
            getItem('Feedback', 'feedback'),
            getItem('Performance', 'performance'),
            getItem('Team', 'team'),
            getItem('Analytics', 'analytics'),
            getItem('Add a new task', 'newTask'),
        ]),
    ], 'group'),

    getItem('Sales', 'sales', <MailOutlined />, [
    ]),
    getItem('Design', 'design', <AppstoreOutlined />, [
    ]),
    getItem('Office', 'office', <AppstoreOutlined />, [
    ]),
    getItem('Legal', 'legal', <AppstoreOutlined />, [

    ]),

    // getItem('Invite Teammates', 'invite', <MailOutlined />),

];

const MenuBar = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // paddingBlock: "10px"
            }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <AppstoreOutlined
                        style={{ fontSize: "20px", paddingLeft: "10px" }} />
                    <div style={{ paddingLeft: "10px" }}>
                        <Typography>IH</Typography>
                        <Typography>Innovative Hub</Typography>
                    </div>
                </div>
                <div>
                    <Avatar />
                </div>
            </div>
            <Menu
                onClick={onClick}
                style={{
                    width: 256,
                    // backgroundColor: "red",
                    height: "75vh"
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
            <div style={{ paddingLeft: "20px" }}>
                <Button style={{ width: 200, marginBottom: "10px" }}><UserAddOutlined />Invite teamamtes</Button>
                <Button style={{ width: 200, marginBottom: "10px" }}><QuestionOutlined />Help and first steps</Button>
                <div style={{ display: "flex" }}>
                    <Button style={{ width: 140 }}><CustomerServiceOutlined />
                        days left on trial
                    </Button>
                    <Button style={{ marginLeft: "10px", backgroundColor: "black", color: "white", width: 80 }}>Add bling</Button>
                </div>


            </div>
        </>
    );
};

export default MenuBar;
