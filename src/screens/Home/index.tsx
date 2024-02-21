import { useNavigation } from "@react-navigation/native";
import * as Device from "expo-device";
import * as Location from "expo-location";
import { useCallback, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { Job } from "../../@types/job";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import api from "../../lib/api";
import { INavigationProps } from "../RootStackParams";
import { Container, Counter, Info, Wrapper } from "./styles";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState<Region>();
  const [jobs, setJobs] = useState<Job[]>([]);
  const { navigate } = useNavigation<INavigationProps>();

  useEffect(() => {
    const fetchData = async () => {
      const jobs = await api.jobs.get();
      if (jobs) setJobs(jobs);
    };

    if (Device.isDevice) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permissão negada");
          return;
        }

        let location = await Location.getCurrentPositionAsync();
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })();
    } else {
      console.log("Você está em um emulador. A localização será emulada.");
      setCurrentLocation({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }

    fetchData();
  }, []);

  const handleGoToProfile = useCallback(() => {
    navigate("Profile");
  }, []);

  const handleMarkerPress = useCallback((job: Job) => {
    navigate("Detail", job);
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
        initialRegion={currentLocation}
      >
        {jobs.length > 0 &&
          jobs.map((job) => (
            <Marker
              key={job.id}
              onPress={() => handleMarkerPress(job)}
              coordinate={{
                latitude: job.latitude,
                longitude: job.longitude,
              }}
            />
          ))}
      </MapView>
      <Container>
        <Logo />
        <Counter>{jobs.length} vagas encontradas</Counter>
        <Info>Clique no marcador para saber mais sobre a vaga.</Info>
        <Button title="Ver meus dados" onPress={handleGoToProfile} />
      </Container>
    </Wrapper>
  );
}
