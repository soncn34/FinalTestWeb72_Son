import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    color="#ffffff"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item><Link to={'/manage-product'}>Manage Product</Link></Menu.Item>
                </Menu>
            </Sider>
            
        </Layout>
    )
}

export default MainLayout