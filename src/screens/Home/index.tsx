import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Image } from "react-native";
import bgtop_expand from "../../assets/bgtop_expand.png";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { INavigationProps } from "../RootStackParams";
import { Container, Counter, Info, Wrapper } from "./styles";

export default function Home() {
  const { navigate } = useNavigation<INavigationProps>();

  const counter = 337;

  const handleGoToDetail = useCallback(() => {
    navigate("Detail");
  }, []);
  return (
    <Wrapper>
      <Image source={bgtop_expand} />

      <Container>
        <Logo />
        <Counter>{counter} vagas encontradas</Counter>
        <Info>Clique no marcador para saber mais sobre a vaga.</Info>
        <Button title="Ver meus dados" onPress={handleGoToDetail} />
      </Container>
    </Wrapper>
  );
}
