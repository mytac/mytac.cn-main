import React from 'react';
import PropTypes from 'prop-types';

export default function ManagePanel() {
  return (
    <div className="manage-panel">
      <table>
        <tr>
          <td>标题</td>
          <td>置顶</td>
          <td>删除</td>
        </tr>
      </table>
    </div>
  );
}
