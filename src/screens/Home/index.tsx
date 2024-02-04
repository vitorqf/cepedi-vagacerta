import { Image } from "react-native";
import bgtop_expand from "../../assets/bgtop_expand.png";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { Container, Counter, Info, Wrapper } from "./styles";

export default function Home() {
  const counter = 337;
  return (
    <Wrapper>
      <Image source={bgtop_expand} />

      <Container>
        <Logo />
        <Counter>{counter} vagas encontradas</Counter>
        <Info>Clique no marcador para saber mais sobre a vaga.</Info>
        <Button title="Ver meus dados" />
      </Container>
    </Wrapper>
  );
}
