import { useField } from "formik";
import { TextInputProps } from "react-native";
import { StyledInput } from "./styles";

interface InputProps extends TextInputProps {
  placeholder?: string;
  name?: string;
}

export function Input({ placeholder, name, ...rest }: InputProps) {
  if (name) {
    const [field] = useField(name);
    return (
      <StyledInput
        placeholder={placeholder}
        placeholderTextColor="#1E6262"
        onChangeText={field.onChange(name)}
        value={field.value}
        {...rest}
      />
    );
  } else {
    return (
      <StyledInput
        placeholder={placeholder}
        placeholderTextColor="#1E6262"
        {...rest}
      />
    );
  }
}
