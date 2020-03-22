import React from 'react';
import './App.css';

import { Upload, message, Table, Form, Checkbox, Select, Button, Layout } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Option } = Select;
const { Footer } = Layout;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a>Delete</a>
      </span>
    ),
  }
];

const handleSelectChange = () => {
  console.log('handleSelectChange');
}

const handleCheckboxChange = () => {
  console.log('handleCheckboxChange');
}

function App() {
  return (
    <div className="App">
      <section className="uploader-wrapper">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或直接拖拽文件至此处上传</p>
          <p className="ant-upload-hint">
            可上传文件：图片、音频、视频、CSS、JS、SWF、APK
          </p>
        </Dragger>
      </section>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          }
        }}
      />
      <Form className="option-form" layout={'inline'} size={'small'}>
          <Form.Item>
            <Select defaultValue="overseas" style={{ width: 220 }} onChange={handleSelectChange}>
              <Option value="ihuayue">国内 - file.ihuayue.cn</Option>
              <Option value="qlsoo">国内(阡里搜) - file.qlsoo.com</Option>
              <Option value="overseas">海外 - file.dreame.com</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={handleCheckboxChange}>使用 https</Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={handleCheckboxChange}>不保留文件名(JS/CSS)</Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={handleCheckboxChange}>不压缩(JS/CSS/图片)</Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={handleCheckboxChange}>ES5</Checkbox>
          </Form.Item>
          <Form.Item className="option-btns">
            <Button>删除选中</Button>
            <Button className="ml-20">删除所有</Button>
          </Form.Item>
        </Form>
    </div>
  );
}

export default App;
