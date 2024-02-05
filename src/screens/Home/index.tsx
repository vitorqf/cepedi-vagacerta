import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useCallback, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { INavigationProps } from "../RootStackParams";
import { Container, Counter, Info, Wrapper } from "./styles";

export default function Home() {
  const [status, requestPermission] = Location.useBackgroundPermissions();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
    })();
  }, []);

  const { navigate } = useNavigation<INavigationProps>();

  const counter = 337;

  const handleGoToProfile = useCallback(() => {
    navigate("Profile");
  }, []);
  return (
    <Wrapper>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: "100%",
          height: "100%",
          flex: 4,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Container>
        <Logo />
        <Counter>{counter} vagas encontradas</Counter>
        <Info>Clique no marcador para saber mais sobre a vaga.</Info>
        <Button title="Ver meus dados" onPress={handleGoToProfile} />
      </Container>
    </Wrapper>
  );
}
