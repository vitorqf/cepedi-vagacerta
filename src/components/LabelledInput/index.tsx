import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Label, Wrapper } from "./styles";

interface FieldProps extends TextInputProps {
  label: string;
  placeholder?: string;
  name?: string;
  error?: string;
}

export function LabelledInput({
  label,
  placeholder,
  name,
  error,
  ...rest
}: FieldProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder} name={name} {...rest} />
      {error && <Label $isError>{error}</Label>}
    </Wrapper>
  );
}
