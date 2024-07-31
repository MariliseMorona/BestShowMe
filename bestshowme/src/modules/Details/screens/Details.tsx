import React, { useState }  from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/types';
import { Container, DetailsContainer, Title, SimpleText } from '../../../components/styles';
import { Audio, Video } from 'expo-av';
import LikedButton from '../components/LikedButton/LikedButton'

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
    route: DetailsScreenRouteProp;
};

export const Details = ({ route }: Props) => {
    const { item } = route.params;

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <DetailsContainer>
                    <Title>
                        {item.title}
                    </Title>
                    <Video
                        source={{ uri: item.hls_path }}
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
                        { item.description }
                    </SimpleText>
                    <SimpleText>Views: {item.views}</SimpleText>
                    <SimpleText>Likes: {item.likes}</SimpleText>
                    <LikedButton>
                    </LikedButton>
                </DetailsContainer>
            </Container>
        </ThemeProvider>
    );
}
export default Details;