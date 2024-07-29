import React, { useState }  from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { Container, CellContainer, Title, SimpleText } from '../../../components/styles';
import { Audio, Video } from 'expo-av';
import LikedButton from '../components/LikedButton/LikedButton'

export const Details = ({ navigation, route }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CellContainer>
                    <Title>
                        {route.params.name}
                    </Title>
                    <SimpleText>
                        Esse vídeo é muito legal. Bora assistir juntos ?
                    </SimpleText>
                    <Video
                        source={ { uri: 'https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/14e23fcb-aeb4-4e23-bb26-e130752c1b67/playlist.m3u8'}}
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