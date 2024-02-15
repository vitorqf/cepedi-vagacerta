import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Alert } from "react-native";
import * as Yup from "yup";
import { usePushNotifications } from "../../../usePushNotifications";
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
  const { sendPushNotification, expoPushToken } = usePushNotifications();

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

  const handleFormSubmit = useCallback(
    async (values: FormStructure) => {
      // Ensure expoPushToken is not undefined before proceeding
      if (!expoPushToken) {
        // Handle scenario where token is undefined
        console.error("Expo push token is undefined");
        return;
      }

      // Send push notification only if token is available
      await sendPushNotification(
        "Bem-vindo ao DevJobs",
        "Clique no botão para ver as vagas disponíveis",
        expoPushToken.data
      );

      if (values.email === user.email && values.password === user.senha) {
        handleNavigateToHome();
      } else {
        Alert.alert("Erro no login", "E-mail ou senha incorretos");
      }
    },
    [sendPushNotification, expoPushToken, handleNavigateToHome]
  );

  return {
    initialValues,
    LoginSchema,
    handleFormSubmit,
    handleNavigateToRegister,
  };
}
