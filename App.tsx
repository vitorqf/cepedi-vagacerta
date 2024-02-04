import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";

import Router from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  onLayoutRootView();

  return (
    <>
      <StatusBar style="auto" />
      {fontsLoaded && <Router />}
    </>
  );
}
