import { useState } from "react";

interface MyInputProps {
  value: number | string;
  name: string;
  type?: "text" | "number";
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const MyInput = ({
  value,
  name,
  type = "text",
  handleChange,
}: MyInputProps) => {
  return (
    <div>
      <input type={type} onChange={handleChange} name={name} value={value} />
    </div>
  );
};
export default MyInput;
