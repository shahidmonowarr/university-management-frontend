"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/login-image.png";

type FromValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const onsubmit: SubmitHandler<FromValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={14} lg={10}>
        <Image src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          Login to your account
        </h1>
        <div>
          <Form submitHandler={onsubmit}>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                label="User Id"
                placeholder="id"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                placeholder="password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
