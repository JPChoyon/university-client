import { DatePicker, Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TDatePickerProps = {
  name: string;
  label?: string;
};
const JpUniDatePicker = ({ name, label }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "2px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default JpUniDatePicker;
