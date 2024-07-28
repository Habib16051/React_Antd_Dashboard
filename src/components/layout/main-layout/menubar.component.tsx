import { Menu } from "antd";

import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { MenuList } from "../../../constants/menu-list";

interface MenuProps {
  menuList: MenuList;
  openKey?: string;
  onChangeOpenKey: (key?: string) => void;
  selectedKey: string;
  onChangeSelectedKey: (key: string) => void;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}
const MenuBar: FC<MenuProps> = (props) => {
  const {
    menuList,
    openKey,
    onChangeOpenKey,
    selectedKey,
    onChangeSelectedKey,
    setCollapsed,
    isMobile,
  } = props;

  const navigate = useNavigate();
  const onMenuClick = (path: string) => {
    onChangeSelectedKey(path);
    navigate(path);
    if (isMobile) {
      setCollapsed(false);
    }
  };

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop();

    onChangeOpenKey(key);
  };
  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKey ? [openKey] : []}
      onOpenChange={onOpenChange}
      onSelect={(k) => onMenuClick(k.key)}
      className="!border-none" // dont remove this class
      items={menuList.map((menu) => {
        return menu.children
          ? {
              key: menu.id,
              label: menu.label,
              icon: menu.icon,
              children: menu.children.map((child) => ({
                key: child.path,
                label: child.label,
              })),
            }
          : {
              key: menu.path,
              label: menu.label,
              icon: menu.icon,
            };
      })}
    ></Menu>
  );
};

export default MenuBar;
