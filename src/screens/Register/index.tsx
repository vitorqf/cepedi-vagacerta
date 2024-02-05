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
import useRegister from "./useRegister";

export default function Register() {
  const {
    initialValues,
    RegisterSchema,
    handleRegister,
    handleNavigateToLogin,
  } = useRegister();

  return (
    <Wrapper>
      <Image source={bgtop} />

      <Container>
        <Logo />
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form>
              <LabelledInput
                label="Nome"
                placeholder="digite seu nome"
                name="name"
                error={errors.name && touched.name ? errors.name : undefined}
              />
              <LabelledInput
                label="E-mail"
                placeholder="digite seu e-mail"
                name="email"
                error={errors.email && touched.email ? errors.email : undefined}
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
              <Button title="Cadastrar" onPress={() => handleSubmit()} />
              <CallSignin>
                Já tem uma conta?{" "}
                <CallSigninStrong onPress={handleNavigateToLogin}>
                  Faça seu login.
                </CallSigninStrong>
              </CallSignin>
            </Form>
          )}
        </Formik>
      </Container>
    </Wrapper>
  );
}
