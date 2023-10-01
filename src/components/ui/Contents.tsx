"use client";
import { Layout } from "antd";
import Header from "./Header";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        height: "100vh",
        color: "black",
      }}
    >
      <Header />
      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
