import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type FormTextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
}: FormTextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            {...field}
            rows={rows}
            defaultValue={value}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
