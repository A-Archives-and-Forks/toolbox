import { Input, Space } from "antd";
import CopyTextButton from "@/components/CopyTextButton";

export interface Props {
  value?: string;
  tag?: string | null;
}

const InputCopyable = (props: Props) => {
  return (
    <div className="my-4">
      <Space.Compact block>
        <Space.Addon>{props.tag}</Space.Addon>
        <Input value={props.value || ""} showCount />
        <CopyTextButton text={props.value} />
      </Space.Compact>
    </div>
  );
};

export default InputCopyable;
