import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { INavigationProps } from "../RootStackParams";
import {
  Content,
  Description,
  Header,
  Splitter,
  Title,
  Wrapper,
} from "./styles";

export default function Detail() {
  const { goBack } = useNavigation<INavigationProps>();

  const handleGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Button
          noSpacing
          title="< voltar"
          variant="secondary"
          onPress={handleGoBack}
        />
        <Logo />
      </Header>

      <Splitter />

      <Content>
        <Title>Desenvolvedor de aplicações móveis</Title>
        <Description>
          Estamos em busca de um desenvolvedor mobile altamente qualificado para
          se juntar à nossa equipe de tecnologia. O candidato ideal terá
          experiência sólida no desenvolvimento de aplicativos móveis nativos
          para plataformas iOS e/ou Android, além de habilidades comprovadas em
          programação em linguagens como Swift, Kotlin, Objective-C e/ou Java.
        </Description>
        <Button title="Entrar em contato" />
      </Content>
    </Wrapper>
  );
}
