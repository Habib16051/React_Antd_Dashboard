import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, theme } from "antd";
import logo from "../../../assets/logo.png";

import { FC } from "react";
const { Header } = Layout;
interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
  isMobile: boolean;
}

const SiteHeader: FC<HeaderProps> = ({ collapsed, toggle, isMobile }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const status = "authenticated";

  return (
    <Header
      className="shadow flex items-center justify-between !p-0 z-10 sticky top-0"
      style={{
        background: colorBgContainer,
      }}
    >
      {!isMobile && (
        <a href={"/"}>
          <div
            className=" items-center justify-center hidden sm:hidden md:hidden lg:flex"
            style={{ width: collapsed ? 80 : 200 }}
          >
            <img src={logo} alt="" className="w-3/4 h-auto" />
          </div>
        </a>
      )}
      <div className="flex items-center justify-between flex-1 py-0 px-4">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggle}
          style={{
            fontSize: "16px",
          }}
        />
        <div className="ml-7 h-full flex ">
          {
            <Dropdown
              menu={{
                items: [
                  status === "authenticated"
                    ? {
                        key: "1",
                        icon: <UserOutlined />,
                        label: <span onClick={() => {}}>User</span>,
                      }
                    : null,
                  {
                    key: "2",
                    icon: <LogoutOutlined />,
                    label: <span onClick={() => {}}>Sign Out</span>,
                    danger: true,
                  },
                ],
              }}
            >
              <span className=" items-center cursor-pointer flex">
                <Avatar size={38} icon={<UserOutlined />} />
              </span>
            </Dropdown>
          }
        </div>
      </div>
    </Header>
  );
};

export default SiteHeader;
