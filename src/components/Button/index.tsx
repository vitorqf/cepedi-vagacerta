import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export function Button({ title, ...others }: ButtonProps) {
  return (
    <Container {...others}>
      <Title>{title}</Title>
    </Container>
  );
}
