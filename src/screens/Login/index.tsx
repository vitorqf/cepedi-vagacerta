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

export default function Login() {
  const { navigate } = useNavigation<INavigationProps>();

  const handleNavigateToRegister = useCallback(() => {
    navigate("Register");
  }, [navigator]);

  const handleNavigateToHome = useCallback(() => {
    navigate("Home");
  }, [navigator]);
  return (
    <Wrapper>
      <Image source={bgtop} />

      <Container>
        <Logo />
        <Form>
          <Field label="E-mail" placeholder="digite seu e-mail" />
          <Field label="Senha" placeholder="digite sua senha" />
          <Button title="Entrar" onPress={handleNavigateToHome} />
          <CallSignin>
            Não tem conta?{" "}
            <CallSigninStrong onPress={handleNavigateToRegister}>
              Crie agora mesmo.
            </CallSigninStrong>
          </CallSignin>
        </Form>
      </Container>
    </Wrapper>
  );
}
