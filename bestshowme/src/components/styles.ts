import styled from "styled-components/native";
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${ props => props.theme.colors.white };
`;

export const TableContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.purple};
  margin-top: 20px;
  padding: 16px;
  ${Platform.OS === 'ios' ? 
    `shadow-color: #000;
    shadow-offset: 0px 10px;
    shadow-opacity: 0.8;
    shadow-radius: 2px;`
    :
    `elevation: 5;`
  }
`;

export const CellContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 8px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.purple};
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  ${Platform.OS === 'ios' ?
    `shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.2;
    shadow-radius: 2px;`
    :
    `elevation: 8;`
  }
`;

export const Title = styled.Text`
    font-size: 28px;
    color: ${ props => props.theme.colors.purple };
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    font-family: ${ props => props.theme.fonts.medium };
    color: ${ props => props.theme.colors.text };
`;

export const SimpleText = styled.Text`
    font-size: 18px;
    color: ${ props => props.theme.colors.text };
`;