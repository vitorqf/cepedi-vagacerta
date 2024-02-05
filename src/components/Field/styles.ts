import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  gap: 4px;
`;

export const Label = styled.Text<{ $isError?: boolean }>`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: ${({ $isError }) => ($isError ? "#ff6666" : "#1e6262")};
`;
