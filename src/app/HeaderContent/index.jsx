import React from 'react';
import { useDispatch } from 'react-redux';

import { Avatar, Menu, Dropdown } from 'antd';

import {
  AppstoreOutlined,
  SettingOutlined,
  MailOutlined,
  LogoutOutlined,
  BellOutlined,
} from '@ant-design/icons';
import photo from '@/style/images/photo.png';

import { logout } from '@/redux/auth/actions';
import history from '@/utils/history';
import uniqueId from '@/utils/uinqueId';

export default function HeaderContent() {
  const dispatch = useDispatch();
  const { SubMenu } = Menu;

  const profileDropdown = (
    <div className="profileDropdown whiteBox shadow" style={{ minWidth: '200px' }}>
      <div className="pad15">
        <Avatar size="large" className="last" src={photo} style={{ float: 'left' }} />
        <div className="info">
          <p className="strong">Salah Eddine Lalami</p>
          <p>Lalami.sdn@gmail.com</p>
        </div>
      </div>
      <div className="line"></div>
      <div>
        <Menu>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1" Items={"Option 1"}/>
              <Menu.Item key="2" Items={"Option 2"}/>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3" Items={"Option 3"}/>
              <Menu.Item key="4" Items={"Option 4"}/>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5" Items={"Option 5"}/>
            <Menu.Item key="6" Items={"Option 6"}/>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7" Items={"Option 7"}/>
              <Menu.Item key="8" Items={"Option 8"}/>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9" Items={"Option 9"}/>
            <Menu.Item key="10" Items={"Option 10"}/>
            <Menu.Item key="11" Items={"Option 11"}/>
            <Menu.Item key="12" Items={"Option 12"}/>
          </SubMenu>
        </Menu>
      </div>
      <div className="line"></div>
      <div>
        <Menu>
          <Menu.Item
            icon={<LogoutOutlined />}
            key={`${uniqueId()}`}
            onClick={() => history.push('/logout')}
          >
            logout
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <div className="headerIcon" style={{ position: 'absolute', right: 0, zIndex: '99' }}>
      <Dropdown overlay={profileDropdown} trigger={['click']} placement="bottomRight">
        {/* <Badge dot> */}
        <Avatar className="last" src={photo} />
        {/* </Badge> */}
      </Dropdown>

      <Avatar icon={<AppstoreOutlined />} />

      <Avatar icon={<BellOutlined />} />
    </div>
  );
}
