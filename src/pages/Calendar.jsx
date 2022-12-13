import React from 'react';

import CrudModule from '@/modules/CrudModule';
import RoleForm from '@/forms/ٌRoleForm';
import MyCalendar from "@/MyCalendar";

export default function Calendar() {
  const entity = 'calendar';
  const searchConfig = {
    displayLabels: ['displayName'],
    searchFields: 'codeName,displayName',
    outputValue: '_id',
  };

  const PANEL_TITLE = 'Calendar Panel';
  const dataTableTitle = 'Calendar Lists';
  const entityDisplayLabels = ['displayName'];

  return (
    <div>
      <MyCalendar/>
    </div>
  );
}
