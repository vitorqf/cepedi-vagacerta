import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert } from "react-native";
import * as Yup from "yup";
import user from "../../data/admin.json";
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

  const handleFormSubmit = useCallback((values: FormStructure) => {
    if (values.email === user.email && values.password === user.senha) {
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
