import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  // Switch,
} from "antd";
import signinbg from "../assets/images/sign_in.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebase";
import Notification from "../components/Notification/Notification";

// function onChange(checked) {
//   console.log(`switch to ${checked}`);
// }
const { Title } = Typography;
const { Content } = Layout;

function SignIn() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values) => {
    const {email, password} = values;
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      setIsLoading(false);
      if(res && res?.user?.accessToken) {
        localStorage.setItem('email', res?.user?.email);
        localStorage.setItem('access-token', res?.user?.accessToken);
        history.push('/');
      }
    })
    .catch(err => {
      setIsLoading(false);
      Notification('error', 'Đăng nhập', 'Đăng nhập không thành công!');
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layout className="layout-default layout-signin">
        <Content className="signin">
          <Row gutter={[24, 0]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
            >
              <Title className="mb-15">Đăng nhập</Title>
              <Title className="font-regular text-muted" level={5}>
                Nhập email và mật khẩu của bạn để đăng nhập
              </Title>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Định dạng email không đúng',
                    },
                    {
                      required: true,
                      message: "Vui lòng nhập email của bạn!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập password của bạn!",
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>

                {/* <Form.Item
                  name="remember"
                  className="aligin-center"
                  valuePropName="checked"
                  style={{
                    marginBottom: "10px"
                  }}
                >
                  <Switch defaultChecked onChange={onChange} />
                  Remember me
                </Form.Item> */}
                <p className="font-semibold text-muted">
                  <Link to="/forgot-password" className="text-primary">
                    Quên mật khẩu?
                  </Link>
                </p>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%", fontSize: "13px", textTransform: "uppercase" }}
                    loading={isLoading}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
                <p className="font-semibold text-muted text-center">
                  Chưa có tài khoản?{" "}
                  <Link to="/sign-up" className="text-dark font-bold">
                    Đăng ký
                  </Link>
                </p>
              </Form>
            </Col>
            <Col
              className="sign-img"
              style={{ padding: 12 }}
              xs={{ span: 24 }}
              lg={{ span: 12 }}
              md={{ span: 12 }}
            >
              <img src={signinbg} alt="" />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default SignIn;