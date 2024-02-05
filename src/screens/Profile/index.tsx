import { Formik } from "formik";
import { Button } from "../../components/Button";
import { LabelledInput } from "../../components/Field";
import { Logo } from "../../components/Logo";
import { Content, Header, Splitter, Wrapper } from "./styles";
import useProfile from "./useProfile";

export default function Profile() {
  const { handleFormSubmit, ProfileSchema, handleGoBack, initialValues } =
    useProfile();

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

      <Formik
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <Content>
            <LabelledInput
              label="Nome"
              placeholder="digite seu nome"
              name="name"
            />
            <LabelledInput
              label="E-mail"
              placeholder="digite seu e-mail"
              name="email"
            />
            <LabelledInput
              label="Senha"
              placeholder="digite sua senha"
              name="password"
              secureTextEntry
            />
            <Button title="Salvar informações" onPress={() => handleSubmit()} />
          </Content>
        )}
      </Formik>
    </Wrapper>
  );
}
