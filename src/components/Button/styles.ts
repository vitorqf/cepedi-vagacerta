import styled from "styled-components/native";

type ButtonProps = {
  $variant?: "primary" | "secondary";
  $noSpacing?: boolean;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({ $noSpacing }) => ($noSpacing ? "max-content" : "100%")};
  height: 48px;
  padding: ${({ $noSpacing }) => ($noSpacing ? "0px" : "0 16px")};
  border-radius: 8px;
  gap: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({ $variant }) =>
    $variant === "primary" ? "#3d6cb9" : "transparent"};
`;

export const Title = styled.Text<ButtonProps>`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: left;
  color: ${({ $variant }) => ($variant === "primary" ? "#ffffff" : "#3d6cb9")};
`;
