"use client";
import { Layout } from "antd";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        height: "100vh",
        color: "black",
      }}
    >
      {children}
    </Content>
  );
};

export default Contents;
