import React from "react";
import {
  Layout,
  Button,
  Card,
  Form,
  Input
} from "antd";
import { Link, useHistory } from "react-router-dom";
import Notification from "../components/Notification/Notification"

// Firebase
import { auth } from "../service/firebase";
import { sendPasswordResetEmail } from 'firebase/auth'

const { Content } = Layout;

function ResetPassword() {
  const history = useHistory();


  const onFinish = (values) => {
    const { email } = values;
    sendPasswordResetEmail(auth, email).then((res) => {
      Notification('success', 'Đăng ký', 'Đặt lại mật khẩu thành công! Vui lòng kiểm tra Email');
      history.push(`/sign-in`);
    })
    .catch(err => {
      Notification('error', 'Đăng ký', 'Đặt lại mật khẩu thành công!');
    }
  )
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
            title={<h5>Đặt lại mật khẩu</h5>}
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
                  { required: true, message: "Vui lòng nhập email của bạn!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item style={{marginBottom: "5px"}}>
                <Button
                  style={{ width: "100%", textTransform: "uppercase" }}
                  type="primary"
                  htmlType="submit"
                >
                  Gửi email đặt lại
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center">
              <Link to={`/sign-in`}>
                <Button type="link">Quay lại đăng nhập</Button>
              </Link>
            </div>
          </Card>
        </Content>
      </div>
    </>
  );
}

export default ResetPassword;
