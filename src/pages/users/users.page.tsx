import { Button, Form, Input, Select } from "antd";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
    phone: "${label} is not a valid number!",
  },
};

const Users = () => {
  const { Option } = Select;

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const [form] = Form.useForm();

  const genderOptions = [
    { id: "1", value: "male", label: "male" },
    { id: "2", value: "female", label: "female" },
    { id: "3", value: "other", label: "other" },
  ];

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex justify-center p-20">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        className="w-full max-w-lg bg-slate-200 p-8 rounded-lg shadow-lg"
        validateMessages={validateMessages}
      >
        <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
          <Input className="w-full border border-gray-300 rounded-md p-2" />
        </Form.Item>
        <Form.Item name={["email"]} label="Email" rules={[{ type: "email" }]}>
          <Input className="w-full border border-gray-300 rounded-md p-2" />
        </Form.Item>
        <Form.Item
          name={["phone"]}
          label="Phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              pattern: /^[0-9]+$/,
              message: "Please enter a valid phone number!",
            },
          ]}
        >
          <Input className="w-full border border-gray-300 rounded-md p-2" />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            {genderOptions?.map((option, key) => (
              <Option key={key} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="min-w-full bg-cyan-600"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Users;
