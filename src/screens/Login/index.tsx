import { Image } from "react-native";
import bgtop from "../../assets/bgtop.png";
import { Button } from "../../components/Button";
import { Field } from "../../components/Field";
import { Logo } from "../../components/Logo";
import {
  CallSignin,
  CallSigninStrong,
  Container,
  Form,
  Wrapper,
} from "./styles";

export default function Login() {
  return (
    <Wrapper>
      <Image source={bgtop} />

      <Container>
        <Logo />
        <Form>
          <Field label="E-mail" placeholder="digite seu e-mail" />
          <Field label="Senha" placeholder="digite sua senha" />
          <Button title="Entrar" />
          <CallSignin>
            Não tem conta?{" "}
            <CallSigninStrong>Crie agora mesmo.</CallSigninStrong>
          </CallSignin>
        </Form>
      </Container>
    </Wrapper>
  );
}
