import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, DatePicker } from "antd";

const { Header, Content, Sider } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Header className="header">
        <div className="logo" />
        <DatePicker />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1"> */}
            <Menu.Item key="1">Study</Menu.Item>
            <Menu.Item key="2">Exercise</Menu.Item>
            <Menu.Item key="3">Cafe</Menu.Item>
            {/* <Menu.Item key="4">option4</Menu.Item> */}
            {/* </SubMenu> */}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content Which will be Changed like SPA
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
);

export default App;
