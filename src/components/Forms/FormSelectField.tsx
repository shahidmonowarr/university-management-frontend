"use client";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
type SelectOptions = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  validation?: object;
  label?: string;
  defaultValue?: SelectOptions;
  placeholder?: string;
};

const FormSelectField = ({
  name,
  size,
  value,
  validation,
  options,
  label,
  defaultValue,
  placeholder,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;