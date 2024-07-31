import styled from "styled-components/native";
import { Platform, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth 

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${ props => props.theme.colors.purple };
`;

export const CellContainer = styled.View`
  width: ${(screenWidth / 2) - 20}px;
  margin: 8px;
  padding: 16px -16px;
  border-width: 2px;
  border-color: ${props => props.theme.colors.purple};
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  justify-content: center;
  ${Platform.OS === 'ios' ? 
    `shadow-color: #000;
    shadow-offset: 0px 10px;
    shadow-opacity: 0.8;
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

export const DetailsContainer = styled.View`
  width: ${screenWidth}px;
  margin: 8px;
  padding: 16px;
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
    text-align: center;
    color: ${ props => props.theme.colors.white };
    font-family: ${ props => props.theme.fonts.bold };
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