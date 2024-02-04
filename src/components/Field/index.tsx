import { Input } from "../Input";
import { Label, Wrapper } from "./styles";

interface FieldProps {
  label: string;
  placeholder?: string;
}

export function Field({ label, placeholder }: FieldProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
}
