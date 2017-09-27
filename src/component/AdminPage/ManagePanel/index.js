import React from 'react';
import { Icon, Label, Menu, Table, Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const tempData = [
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '1' },
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '2' },
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '3' },
  { title: 'xxxx', date: '1995-01-20', status: '1', id: '4' },
];

export default class ManagePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowConfirm: false,
    };
    this.delEvent = this.delEvent.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  // 删除事件
  delEvent(id) {
    this.setState({
      isShowConfirm: true,
    });
    this.delId = id;
  }

  handleCancel() {
    this.setState({
      isShowConfirm: false,
    });
  }

  handleConfirm() {
    // todo:删除
    const id = this.delId;
    this.setState({
      isShowConfirm: false,
    });
  }

  render() {
    const { isShowConfirm } = this.state;
    return (
      <div className="manage-panel">
        <Confirm
          open={isShowConfirm}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
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
                <Table.Cell>{status === '1' && <Button onClick={() => this.delEvent(id)}>删除</Button>}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

        </Table>
      </div>
    );
  }
}
