import { NavigationProp } from "@react-navigation/native";
import { Job } from "../@types/job";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Detail: Job | undefined;
  Profile: undefined;
};

export type INavigationProps = NavigationProp<RootStackParamList>;
