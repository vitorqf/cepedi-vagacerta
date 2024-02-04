import { Container, Title } from "./styles";

interface ButtonProps {
  title?: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
