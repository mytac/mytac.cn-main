import React from 'react';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const tempData = [
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '1' },
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '2' },
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '3' },
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '4' },
];

// 删除事件
const delEvent = (id) => {
  // ...
  console.log(id);
};


// 根据状态处理删除按钮显示状态
const handleButton = (status, id) => (status === '1' ? <Button onClick={() => delEvent(id)}>删除</Button> : '');

export default function ManagePanel() {
  return (
    <div className="manage-panel">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>标题</Table.HeaderCell>
            <Table.HeaderCell>时间</Table.HeaderCell>
            <Table.HeaderCell>操作</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tempData.map(({ title, date, id, status }) => (
            <Table.Row key={id}>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{date}</Table.Cell>
              <Table.Cell>{handleButton(status, id)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

      </Table>
    </div>
  );
}
