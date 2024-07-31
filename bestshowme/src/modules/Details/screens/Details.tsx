import React, { useCallback, useState }  from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/types';
import { Container, DetailsContainer, Title, SimpleText } from '../../../components/styles';
import { Audio, Video, AVPlaybackStatus } from 'expo-av';
import LikedButton from '../components/LikedButton/LikedButton'
import { AdsVideo } from '../services/model';
import { api } from '../../../services/api';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
    route: DetailsScreenRouteProp;
};

const Details = ({ route }: Props) => {
    const { item } = route.params;

    const [data, setData] = useState<AdsVideo>()
    const [likedCount, setLiked] = useState(item.likes);
    const [viewedCount, setviewed] = useState(item.views);
    const [isLiked, setIsLiked] = useState(false);

    const updateVideo = async (id: string, data: Partial<AdsVideo>) => {
        try {
          const response = await api.patch(`videos/${id}`, data);
          return response.data;
        } catch (error) {
          console.error('Erro ao atualizar o vídeo:', error);
          throw error;
        }
      };

    const handleLikeToggle = (liked: boolean) => {
        // setIsLiked(liked);
        // const newValueLiked = isLiked ? setLiked(likedCount+1) : setLiked(likedCount-1)
        
        const newLikedCount = liked ? likedCount + 1 : likedCount - 1;
        setIsLiked(liked);
        setLiked(newLikedCount);
        updateVideo(item.id, { likes: newLikedCount })
    };

    const handlePlaybackStatusUpdate = async (status: AVPlaybackStatus) => {
        let newViewedCount = viewedCount
        if (status.isLoaded && status.isPlaying) {
            const videoDuration = status.durationMillis ?? 0;
            const currentPosition = status.positionMillis ?? 0;
            if (currentPosition >= videoDuration * 0.95) {
                newViewedCount = viewedCount + 1
                updateVideo(item.id, { views: newViewedCount })
            }
        }
        setviewed(newViewedCount)
    };

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
                        onPlaybackStatusUpdate={ handlePlaybackStatusUpdate }
                    >
                    </Video>
                    <SimpleText>
                        { item.description }
                    </SimpleText>
                    <SimpleText>Views: {viewedCount}</SimpleText>
                    <SimpleText>Likes: {likedCount}</SimpleText>
                    <LikedButton onLikeToggle={ handleLikeToggle }/>
                </DetailsContainer>
            </Container>
        </ThemeProvider>
    );
};

export default Details;