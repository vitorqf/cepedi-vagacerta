import { Formik } from "formik";
import { Image } from "react-native";
import bgtop from "../../assets/bgtop.png";
import { Button } from "../../components/Button";
import { LabelledInput } from "../../components/LabelledInput";
import { Logo } from "../../components/Logo";
import {
  CallSignin,
  CallSigninStrong,
  Container,
  Form,
  Wrapper,
} from "./styles";
import useLogin from "./useLogin";

export default function Login() {
  const {
    initialValues,
    LoginSchema,
    handleFormSubmit,
    handleNavigateToRegister,
  } = useLogin();

  return (
    <Wrapper>
      <Image source={bgtop} />

      <Container>
        <Logo />
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched, handleSubmit }) => {
            return (
              <Form>
                <LabelledInput
                  label="E-mail"
                  placeholder="digite seu e-mail"
                  name="email"
                  error={
                    errors.email && touched.email ? errors.email : undefined
                  }
                />
                <LabelledInput
                  label="Senha"
                  placeholder="digite sua senha"
                  name="password"
                  error={
                    errors.password && touched.password
                      ? errors.password
                      : undefined
                  }
                  secureTextEntry
                />
                <Button title="Entrar" onPress={() => handleSubmit()} />
                <CallSignin>
                  Não tem conta?{" "}
                  <CallSigninStrong onPress={handleNavigateToRegister}>
                    Crie agora mesmo.
                  </CallSigninStrong>
                </CallSignin>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Wrapper>
  );
}
