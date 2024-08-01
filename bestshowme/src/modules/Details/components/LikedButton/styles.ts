import styled from "styled-components/native";
import { Platform, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const DetailsContainer = styled.View`
  width: ${screenWidth - 32}px; 
  align-items: center;
  margin-left: 16px;
  margin-top: 16px;
  padding-top: 16px;
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

export const ContainerIcon = styled.View`
  flex: 1;
  justify-content: 'center';
  align-items: 'center';
  background-color: ${ props => props.theme.colors.white };
`;

export const ContainerVideo = styled.View`
  flex: 1;
  background-color: ${ props => props.theme.colors.blue };
`;

export const PortraitMode_Video = styled.View`
  width: '100%';
  height: 200px;
  background-color: ${ props => props.theme.colors.pink };
`;

export const LandsCapeMode_Video = styled.View`
  width: '100%';
  height: '100%';
`;

export const Title = styled.Text`
    font-size: 18px;
    text-align: center;
    padding-bottom: 16px;
    color: ${ props => props.theme.colors.text };
    font-family: ${ props => props.theme.fonts.bold };
`;