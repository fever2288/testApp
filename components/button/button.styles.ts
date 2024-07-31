import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  customStyle: any;
  disabled?: boolean;
}>`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  ${(props) => props.customStyle};
`;

export const ButtonText = styled.Text<{ customStyle: any; disabled?: boolean }>`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.disabled && props.theme.colors.systemGray};
  ${(props) => props.customStyle};
`;
