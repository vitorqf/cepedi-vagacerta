import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Image } from "react-native";
import bgtop from "../../assets/bgtop.png";
import { Button } from "../../components/Button";
import { Field } from "../../components/Field";
import { Logo } from "../../components/Logo";
import { INavigationProps } from "../RootStackParams";
import {
  CallSignin,
  CallSigninStrong,
  Container,
  Form,
  Wrapper,
} from "./styles";

export default function Register() {
  const { navigate } = useNavigation<INavigationProps>();

  const handleNavigateToLogin = useCallback(() => {
    navigate("Login");
  }, [navigator]);

  return (
    <Wrapper>
      <Image source={bgtop} />

      <Container>
        <Logo />
        <Form>
          <Field label="Nome" placeholder="digite seu nome" />
          <Field label="E-mail" placeholder="digite seu e-mail" />
          <Field label="Senha" placeholder="digite sua senha" />
          <Button title="Cadastrar" />
          <CallSignin>
            Já tem uma conta?{" "}
            <CallSigninStrong onPress={handleNavigateToLogin}>
              Faça seu login.
            </CallSigninStrong>
          </CallSignin>
        </Form>
      </Container>
    </Wrapper>
  );
}
