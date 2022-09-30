import 'antd/dist/antd.css';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  ContainerFilled,
  HddFilled,
  TeamOutlined,
  UserOutlined,


} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

//SIDEBAR
const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Shop', '2', <ShoppingCartOutlined />),
  getItem('Storage', '3', <ContainerFilled />,),
  getItem('MovStorage', '4', <HddFilled />),
  getItem('User', '5', <UserOutlined />,),
  getItem('Team', '6', <TeamOutlined />,),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">

        <Content
          style={{
            margin: '0 16px',
          }}
        >
        <div>
          <h1>HANDLE</h1>
        </div>
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

/*
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
*/