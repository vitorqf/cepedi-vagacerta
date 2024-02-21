import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert } from "react-native";
import * as Yup from "yup";
import api from "../../lib/api";
import { INavigationProps } from "../RootStackParams";

interface FormStructure {
  name: string;
  email: string;
  password: string;
}

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Mínimo 6 dígitos"),
});

export default function useRegister() {
  const { navigate } = useNavigation<INavigationProps>();

  const initialValues: FormStructure = {
    name: "",
    email: "",
    password: "",
  };

  const handleNavigateToLogin = useCallback(() => {
    navigate("Login");
  }, [navigate]);

  const handleNavigateToHome = useCallback(() => {
    navigate("Home");
  }, [navigate]);

  const handleRegister = useCallback(async (values: FormStructure) => {
    const newUser = {
      id: new Date().getTime().toString(),
      name: values.name,
      email: values.email,
      senha: values.password, // Será se essa forma de salvar a senha é a melhor? Procure por bcrypt
      cidade: "",
      estado: "",
    };

    const res = await api.users.post(newUser);

    if (res === 201) {
      return handleNavigateToHome();
    } else {
      return Alert.alert("Erro no registro", "Erro ao registrar usuário");
    }
  }, []);

  return {
    initialValues,
    RegisterSchema,
    handleRegister,
    handleNavigateToLogin,
  };
}
