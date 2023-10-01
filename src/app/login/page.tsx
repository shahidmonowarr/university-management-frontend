import LoginPage from "@/components/ui/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};

const Login = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;
