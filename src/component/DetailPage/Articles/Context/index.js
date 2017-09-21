import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import './style.less';

const testContext = '创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。\n 创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。\n\n创建一个visited数组来保存访问过的位置，初始化全为false，访问当前位置则置为true。遍历目标矩阵，没有访问过的点就递归他的上下左右四个点。';
export default function Context() {
  return (
    <div className="Context">
      <ReactMarkdown source={testContext} />
    </div>
  );
}

Context.propTypes = {

};
