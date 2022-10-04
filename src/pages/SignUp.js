import React from "react";
import {
  Layout,
  Button,
  Card,
  Form,
  Input
} from "antd";
import { Link, useHistory } from "react-router-dom";
import openNotificationWithIcon from "../components/Notification/Notification"

// Firebase
import { auth } from "../service/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth'

const { Content } = Layout;

function SignUp() {
  const history = useHistory();


  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (user) {
        openNotificationWithIcon('success', 'Đăng ký', 'Đăng ký thành công!');
        history.push(`/sign-in`);
      } else {
        openNotificationWithIcon('error', 'Đăng ký', 'Đăng ký không thành công!');
      }
    } catch (err) {
      openNotificationWithIcon('error', 'Đăng ký', 'Đăng ký không thành công!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="layout-default ant-layout layout-sign-up">
        <Content className="p-0">

          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={<h5>Register With</h5>}
            bordered="false"
          >
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="row-col"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
            <p className="font-semibold text-muted text-center">
              Already have an account?{" "}
              <Link to="/sign-in" className="font-bold text-dark">
                Sign In
              </Link>
            </p>
          </Card>
        </Content>
      </div>
    </>
  );
}

export default SignUp;
