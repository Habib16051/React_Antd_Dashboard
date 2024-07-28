import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";

interface MenuItem {
  id: number;
  label: string;
  icon?: any;
  path: string;
  children?: MenuItem[];
}

export type MenuList = MenuItem[];

export const MenuList: MenuList = [
  {
    id: 2,
    label: "Dashboard",
    icon: <AppstoreOutlined />,
    path: "/",
  },
  {
    id: 1,
    label: "Users",
    icon: <UserOutlined />,
    path: "/users",
  },

  {
    id: 3,
    label: "Test",
    icon: <AppstoreOutlined />,
    path: "/login",
    children: [{ id: 1, label: "Test", path: "/login" }],
  },
];
