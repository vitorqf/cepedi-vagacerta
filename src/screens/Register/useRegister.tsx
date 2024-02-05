import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import * as Yup from "yup";
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

  const handleRegister = useCallback((values: FormStructure) => {
    // Implementar a lógica para lidar com o registro do usuário
    console.log("Valores do formulário de registro:", values);
    handleNavigateToLogin();
  }, []);

  return {
    initialValues,
    RegisterSchema,
    handleRegister,
    handleNavigateToLogin,
  };
}
