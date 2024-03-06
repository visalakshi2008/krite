import React from 'react';
import { Typography, Input, Button, Dropdown } from 'antd';
import { UserOutlined, CopyOutlined, SettingOutlined, AppleOutlined, AppstoreFilled } from '@ant-design/icons';
import TableData from "../components/TableData"

function App() {
    return (
        <>
            <div style={{
                // backgroundColor: "green",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBlock: "20px"
            }}>
                <Typography style={{ paddingLeft: "10px" }}>Products</Typography>
                <div style={{ display: "flex", alignItems: "center", }}>
                    <Input size="large" placeholder="Search" prefix={<UserOutlined />}
                        style={{
                            width: "100%", marginRight: "8px", marginRight: "50px"

                        }} />
                    <CopyOutlined style={{ marginRight: "8px", paddingRight: "20px" }} />
                    <SettingOutlined style={{ paddingRight: "20px" }} />
                </div>
            </div>
            <TableData />
        </>
    );
}

export default App;
