import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout} from 'antd';
import Menu, { MenuProps } from "antd/lib/menu";

import { useAppContext } from '@/context/appContext';
import logoIcon from '@/style/images/logo-icon.png';
import logoText from '@/style/images/logo-text.png';

import {
  DesktopOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  BankOutlined,
  CalendarOutlined
} from '@ant-design/icons';


interface Props {}

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuItems: MenuProps["items"] = [
  {
    label: <Link to="/">홈</Link>,
    key: "Dashboard",
    icon :<DashboardOutlined />
  },
  {
    label: <Link to="/department">부서정보</Link>,
    key: "Department",
    icon: <TeamOutlined />
  },
  {
    label: <Link to="/customer">고객과리</Link>,
    key: "Customer",
    icon:<CustomerServiceOutlined />
  },
  {
    label: <Link to="/invoice">Invoice</Link>,
    key: "Invoice",
    icon : <FileTextOutlined />
  },
  {
    label: <Link to="/quote">Quote</Link>,
    key: "Quote",
    icon : <FileSyncOutlined />
  },
  {
    label: <Link to="/payment/invoice">청구서</Link>,
    key: "PaymentInvoice",
    icon : <CreditCardOutlined />
  },
  {
    label: <Link to="/employee">직원관리</Link>,
    key: "Employee",
    icon : <UserOutlined />
  },
  {
    label: <Link to="/calendar">일정관리</Link>,
    key: "Calendar",
    icon : <CalendarOutlined />
  },
  ,
  {
    label: <Link to="/payment/mode">Payment Mode</Link>,
    key: "PaymentMode",
    icon : <UserOutlined />
  },
  {
    label: <Link to="/role">Role</Link>,
    key: "Role",
    icon : <TeamOutlined />
  }
];



export default function Navigation() {
  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  const [current, setCurrent] = useState("home");
  const onMenu: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <>
      <Sider collapsible collapsed={isNavMenuClose} onCollapse={onCollapse} className="navigation">
        <div className="logo">
          <img
            src={logoIcon}
            alt="Logo"
            // style={{ margin: "0 auto 40px", display: "block" }}
          />

          {!showLogoApp && (
            <img src={logoText} alt="Logo" style={{ marginTop: '3px', marginLeft: '10px' }} />
          )}
        </div>
        <Menu mode="inline">
          <Menu.Item key="Dashboard" icon={<DashboardOutlined />} items={<Link to="/">Dashboard</Link>} />
          <Menu.Item key="Department" icon={<TeamOutlined />} items={<Link to="/department">부서관리서</Link>} />
          <Menu.Item key="Customer" icon={<CustomerServiceOutlined />} items={<Link to="/customer">고객관리</Link>} />
          <Menu.Item key="Invoice" icon={<FileTextOutlined />} items={<Link to="/invoice">Invoice</Link>} />
          <Menu.Item key="Quote" icon={<FileSyncOutlined />} items={<Link to="/quote">Quote</Link>} />
          <Menu.Item key="PaymentInvoice" icon={<CreditCardOutlined />} items={<Link to="/payment/invoice">Payment Invoice</Link>} />
          <Menu.Item key="Employee" icon={<UserOutlined />} items={<Link to="/employee">Employee</Link>} />
          <Menu.Item key="Admin" icon={<TeamOutlined />} items={<Link to="/admin">Admin</Link>} />
          <Menu.Item key="Calendar" icon={<CalendarOutlined />} items={<Link to="/calendar">일정관리</Link>} />

          <SubMenu key="Settings" icon={<SettingOutlined />} title="Settings">
            <Menu.Item key="PaymentMode" items={<Link to="/payment/mode">Payment Mode</Link>} />
            <Menu.Item key="Role" items={<Link to="/role">Role</Link>} />
          </SubMenu>
        </Menu>

        <Menu onClick={onMenu} selectedKeys={[current]} items={menuItems} mode="inline" />

      </Sider>
    </>
  );
}
