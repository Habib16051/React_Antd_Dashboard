import { Drawer, Layout, theme } from "antd";
import React, { useState } from "react";
import useDeviceDetect from "../../../hooks/useDeviceDetect";
import SiteHeader from "./header.component";

import { MenuList } from "../../../constants/menu-list";
import MenuBar from "./menubar.component";
const { Sider, Content } = Layout;
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>("home");
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { isMobile } = useDeviceDetect();
  return (
    <Layout className="h-screen">
      <SiteHeader collapsed={collapsed} toggle={toggle} isMobile={isMobile} />
      <Layout>
        {!isMobile ? (
          <Sider
            className="box-border duration-1000 overflow-y-auto h-[calc(100vh - 64px)] sticky left-0 hidden sm:hidden md:hidden lg:block"
            trigger={null}
            collapsible
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="md"
            style={{
              backgroundColor: colorBgContainer,
            }}
          >
            <MenuBar
              setCollapsed={setCollapsed}
              menuList={MenuList}
              openKey={openKey}
              onChangeOpenKey={(k) => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={(k) => setSelectedKey(k)}
              isMobile={isMobile}
            />
          </Sider>
        ) : (
          <Drawer
            width={200}
            placement="left"
            styles={{ body: { padding: 0, height: 100 } }}
            closable={false}
            onClose={toggle}
            open={collapsed}
          >
            <MenuBar
              setCollapsed={setCollapsed}
              menuList={MenuList}
              openKey={openKey}
              onChangeOpenKey={(k) => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={(k) => setSelectedKey(k)}
              isMobile={isMobile}
            />
          </Drawer>
        )}
        <Content className="overflow-y-auto p-[22px]">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
