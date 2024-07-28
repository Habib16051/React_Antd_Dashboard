import { Button, Form } from "antd";
import { ButtonSize, ButtonType } from "antd/es/button";
import { FC } from "react";
import { cn } from "../../../lib/util";

interface SubmitButtonType {
  title: string;
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
}

export const SubmitButton: FC<SubmitButtonType> = ({
  title,
  className,
  type = "text",
  size,
  loading = false,
  ...rest
}) => {
  return (
    <Form.Item>
      <Button
        type={type}
        size={size}
        htmlType="submit"
        className={cn("!bg-black !text-white hover:!bg-black/80", className)}
        loading={loading}
        {...rest}
      >
        {title}
      </Button>
    </Form.Item>
  );
};
