import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert } from "react-native";
import * as Yup from "yup";
import { User } from "../../@types/user";
import api from "../../lib/api";
import { INavigationProps } from "../RootStackParams";

interface FormStructure {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Mínimo 6 dígitos"),
});

export default function useLogin() {
  const { navigate } = useNavigation<INavigationProps>();

  const initialValues: FormStructure = {
    email: "",
    password: "",
  };

  const handleNavigateToRegister = useCallback(() => {
    navigate("Register");
  }, [navigator]);

  const handleNavigateToHome = useCallback(() => {
    navigate("Home");
  }, [navigator]);

  const handleFormSubmit = useCallback(async (values: FormStructure) => {
    const users = await api.users.get();

    const foundUser = users.find(
      (user: User) =>
        user.email === values.email && user.senha === values.password
    );

    if (foundUser) {
      handleNavigateToHome();
    } else {
      Alert.alert("Erro no login", "E-mail ou senha incorretos");
    }
  }, []);

  return {
    initialValues,
    LoginSchema,
    handleFormSubmit,
    handleNavigateToRegister,
  };
}
