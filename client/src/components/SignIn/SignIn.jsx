import "./SignIn.css"
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { login } from "../../service"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../../utils"

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {

    try {
      // const username = form.getFieldValue("username");
      // const password = form.getFieldValue("password");
      // console.log('Success:', username, password);

      const data = await login(values.username, values.password);
      toast.success("Đăng nhập thành công")
      navigate("/")
      saveToLocalStorage("token", JSON.stringify(data.data?.token))
      console.log(data.data?.token);
      console.log('================');
      console.log(data);
      console.log('================');

    } catch (error) {
      toast.error("Đăng nhập thất bại")
      console.log('================');
      console.log("error", error);
      console.log('================');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
