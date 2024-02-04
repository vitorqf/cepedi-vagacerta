import { StyledInput } from "./styles";

interface InputProps {
  placeholder?: string;
}

export function Input({ placeholder }: InputProps) {
  return (
    <StyledInput placeholder={placeholder} placeholderTextColor="#1E6262" />
  );
}
