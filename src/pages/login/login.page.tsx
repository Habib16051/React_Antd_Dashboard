import { Form } from "antd";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { SubmitButton } from "../../components/common/buttons/submit-button.component";
import { Input } from "../../components/common/form";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: any) => {
    setLoading(true);
    console.log("My Log values: ", values);

    setLoading(false);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-neutral-100">
      <div className="p-8 shadow-[0px_16px_96px_0px_#0000001A] rounded-2xl w-[400px] m-8">
        <div className=" flex flex-col items-center justify-center gap-4 mb-4">
          <img src={logo} alt="Logo" />
          <p className="text-center text-2xl font-semibold">Sign In</p>
        </div>
        <Form onFinish={handleLogin} layout="vertical" variant="filled">
          <Input
            name="username"
            label="Username"
            size="large"
            rules={[{ required: true, message: "Please input your Username!" }]}
          />
          <Input
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            type="password"
            size="large"
          />
          <div className="flex justify-end mb-3 -mt-2">
            <a href="" className="text-black hover:text-black/70">
              Forgot Password?
            </a>
          </div>

          <Form.Item>
            <SubmitButton
              title="Sign In"
              className="w-full"
              size="large"
              loading={loading}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
