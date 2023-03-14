import "./login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useRef } from "react";

export default function Login() {
 const emailRef=useRef()
 const passwordRef=useRef()
 
 
    const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            className="input"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="e-mail" ref={emailRef}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            className="input"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password" ref={passwordRef}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href=" ">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href=" ">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
