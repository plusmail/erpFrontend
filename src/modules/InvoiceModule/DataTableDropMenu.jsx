import { Menu } from 'antd';

import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { erp } from '@/redux/erp/actions';
import { selectListItems, selectItemById } from '@/redux/erp/selectors';
import { useErpContext } from '@/context/erp';

import { DOWNLOAD_BASE_URL } from '@/config/serverApiConfig';
import uniqueId from '@/utils/uinqueId';

export default function DataTableDropMenu({ row, entity }) {
  const dispatch = useDispatch();
  const { erpContextAction } = useErpContext();
  const { readPanel, updatePanel, recordPanel, modal } = erpContextAction;
  const item = useSelector(selectItemById(row._id));
  function Read() {
    dispatch(erp.currentItem({ data: item }));
    readPanel.open();
  }
  function RecordPayment() {
    dispatch(erp.currentAction({ actionType: 'recordPayment', data: item }));
    recordPanel.open();
    dispatch(erp.currentItem({ data: item }));
  }
  function Edit() {
    dispatch(erp.currentAction({ actionType: 'update', data: item }));
    updatePanel.open();
  }
  function Delete() {
    dispatch(erp.currentAction({ actionType: 'delete', data: item }));
    modal.open();
  }
  function Download() {
    window.open(`${DOWNLOAD_BASE_URL}${entity}/${entity}-${row._id}.pdf`, '_blank');
  }
  return (
    <Menu style={{ minWidth: 130 }}>
      <Menu.Item key={`${uniqueId()}`} icon={<EyeOutlined />} onClick={Read} Items={"Show"}/>
      <Menu.Item key={`${uniqueId()}`} icon={<CreditCardOutlined />} onClick={RecordPayment} Items={"Record Payment"}/>
      <Menu.Item key={`${uniqueId()}`} icon={<EditOutlined />} onClick={Edit} Items={"Edit"}/>
      <Menu.Item key={`${uniqueId()}`} icon={<FilePdfOutlined />} onClick={Download} Items={"Download"}/>
      <Menu.Item key={`${uniqueId()}`} icon={<DeleteOutlined />} onClick={Delete} Items={"Delete"}/>
    </Menu>
  );
}
