import styled from "styled-components/native";
import { Platform, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  background-color: ${ props => props.theme.colors.purple };
  align-items: 'center';
`;

export const ContainerRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 8px 16px 0 0;
`;

export const CellContainer = styled.View`
  width: ${(screenWidth / 2) - 16}px;
  margin: 8px;
  padding: 16px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.purple};
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  justify-content: center;
  ${Platform.OS === 'ios' ? 
    `shadow-color: #000;
    shadow-offset: 2px 8px;
    shadow-opacity: 0.6;
    shadow-radius: 2px;`
    :
    `elevation: 5;`
  }
`;

export const TableContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  padding: 16px -16px;
`;

export const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${ props => props.theme.colors.white };
    font-family: ${ props => props.theme.fonts.bold };
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    font-family: ${ props => props.theme.fonts.medium };
    color: ${ props => props.theme.colors.text };
`;

export const SimpleText = styled.Text`
    font-size: 14px;
    color: ${ props => props.theme.colors.text };
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
`;
