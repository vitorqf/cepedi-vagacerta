import { Platform } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  gap: 24px;
  background-color: #ecfffb;
  padding: 16px;
  padding-top: ${(Platform.OS === "android" ? 40 : 0) + "px"};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Splitter = styled.View`
  width: 100%;
  height: 2px;
  background-color: #b4f1f1;
`;

export const Content = styled.View`
  gap: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #1e1e1e;
  text-align: justify;
`;
