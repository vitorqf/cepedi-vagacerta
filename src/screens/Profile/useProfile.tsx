import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { INavigationProps } from "../RootStackParams";

import * as Yup from "yup";

interface FormStructure {
  name: string;
  email: string;
  password: string;
}

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export default function useProfile() {
  const { goBack, navigate } = useNavigation<INavigationProps>();

  const initialValues: FormStructure = {
    name: "",
    email: "",
    password: "",
  };

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleNavigateToHome = useCallback(() => {
    navigate("Home");
  }, [navigator]);

  const handleFormSubmit = (values: FormStructure) => {
    // Implementar a lógica para lidar com a atualização do perfil do usuário
    console.log("Form values:", values);
    handleNavigateToHome();
  };

  return {
    initialValues,
    ProfileSchema,
    handleGoBack,
    handleFormSubmit,
  };
}
