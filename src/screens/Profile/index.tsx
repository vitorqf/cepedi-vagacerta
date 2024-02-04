import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Button } from "../../components/Button";
import { Field } from "../../components/Field";
import { Logo } from "../../components/Logo";
import { INavigationProps } from "../RootStackParams";
import { Content, Header, Splitter, Wrapper } from "./styles";

export default function Profile() {
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
        <Field label="Nome" placeholder="digite seu nome" />
        <Field label="E-mail" placeholder="digite seu e-mail" />
        <Field label="Senha" placeholder="digite sua senha" />
        <Button title="Salvar informações" />
      </Content>
    </Wrapper>
  );
}
