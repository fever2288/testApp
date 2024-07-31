import styled from 'styled-components/native';

export const ErrorView = styled.View`
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.error};
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  padding-horizontal: 20px;
`;

export const ErrorTextStyle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.SFDisplayBold};
  color: ${({ theme }) => theme.colors.labelDefault};
`;
