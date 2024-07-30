import React, { useState }  from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/types';
import { Container, CellContainer, Title, SimpleText } from '../../../components/styles';
import { Audio, Video } from 'expo-av';
import LikedButton from '../components/LikedButton/LikedButton'

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
    route: DetailsScreenRouteProp;
};

export const Details = ({ route }) => {
    const { item } = route.params;

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CellContainer>
                    <Title>
                        {item.name}
                    </Title>
                    <SimpleText>
                        Esse vídeo é muito legal. Bora assistir juntos ?
                    </SimpleText>
                    <Video
                        source={{ uri: item.image }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode='cover'
                        shouldPlay
                        // isLooping
                        style={{ width: 300, height: 200 }}
                    >
                    </Video>
                    <SimpleText>
                        Esse vídeo é muito legal. Bora assistir juntos ?
                    </SimpleText>
                    <LikedButton>

                    </LikedButton>
                </CellContainer>
            </Container>
        </ThemeProvider>
    );
}
export default Details;