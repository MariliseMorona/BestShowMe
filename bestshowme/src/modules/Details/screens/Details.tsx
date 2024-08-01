import React, { useCallback, useState, useEffect }  from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import { useOrientation } from '../../../utils/usability.config/OrientationContext';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/types';
import { Container, SimpleText , ContainerRow } from '../../../components/styles';
import { Audio, Video, AVPlaybackStatus } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LikedButton from '../components/LikedButton/LikedButton'
import { AdsVideo } from '../services/model';
import { api } from '../../../services/api';
import { Skeleton } from 'moti/skeleton';
import { SkeletonCommonProps } from '../../../components/styles.animations';
import { Title, DetailsContainer, ContainerVideo, LandsCapeMode_Video, PortraitMode_Video } from '../components/LikedButton/styles';
import { Icon } from 'react-native-paper';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
    route: DetailsScreenRouteProp;
};

const Details = ({ route }: Props) => {
    const { item } = route.params;
    const { isFullscreen, toggleOrientation } = useOrientation();

    const [likedCount, setLiked] = useState(item.likes);
    const [viewedCount, setviewed] = useState(item.views);
    const [isLiked, setIsLiked] = useState(false);
    const [status, setStatus] = useState<AVPlaybackStatus>();
    const [dimensions, setDimensions] = useState(Dimensions.get('window'));
    const [isLoading, setIsLoading] = useState(true);

    const updateVideo = async (id: string, data: Partial<AdsVideo>) => {
        try {
          const response = await api.patch(`videos/${id}`, data);
          return response.data;
        } catch (error) {
          console.error('Erro ao atualizar o vídeo:', error);
          throw error;
        }
      };

      const handleLikeToggle = async (liked: boolean) => {
        const newLikedCount = liked ? likedCount + 1 : likedCount - 1;
        setIsLiked(liked);
        setLiked(newLikedCount);
        updateVideo(item.id, { likes: newLikedCount });

        try {
            if (liked) {
                await AsyncStorage.setItem(`@liked_video_${item.id}`, 'true');
            } else {
                await AsyncStorage.removeItem(`@liked_video_${item.id}`);
            }
        } catch (error) {
            console.error('Erro ao salvar o like:', error);
        }
    };

    const checkIfLiked = async () => {
        try {
            const liked = await AsyncStorage.getItem(`@liked_video_${item.id}`);
            setIsLiked(liked === 'true');
        } catch (error) {
            console.error('Erro ao verificar o like:', error);
        }
    };

    useEffect(() => {
        checkIfLiked();
    }, []);

    const handleLoadStart = () => {
        setIsLoading(true);
    };

    const handleLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        let newViewedCount = viewedCount
        const incrementViews = async () => {
            newViewedCount = viewedCount + 1
            setviewed(newViewedCount)
            updateVideo(item.id, { views: newViewedCount });
        };

        incrementViews();
    }, []);

      return (
        <Container>
            <Skeleton.Group show={isLoading}>
                <DetailsContainer>
                    <Title>{item.title}</Title>
                    <Skeleton
                        height={200}
                        width='98%'
                        radius={10}
                        marginLeft='auto'
                        marginRight='auto'
                        {...SkeletonCommonProps}
                    >
                        <ContainerVideo>
                            <Video
                                source={{ uri: item.hls_path }}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                resizeMode={isFullscreen ? 'cover' : 'contain'}
                                shouldPlay
                                isLooping={false}
                                style={{
                                    width: '100%',
                                    height: isFullscreen ? dimensions.height : 200,
                                }}
                                useNativeControls
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                                onLoadStart={handleLoadStart}
                                onLoad={handleLoad}
                            />
                        </ContainerVideo>
                    </Skeleton>
                    <ContainerRow>
                        <SimpleText>Views: {viewedCount}</SimpleText>
                        <Icon name="visibility" size={30} color="#000" />
                        <SimpleText>Likes: {likedCount}</SimpleText>
                        <LikedButton onLikeToggle={handleLikeToggle} isLiked={isLiked}  />
                    </ContainerRow>
                    <View>
                        <Skeleton
                            height='100%'
                            width='98%'
                            radius={10}
                            marginLeft='auto'
                            marginRight='auto'
                            {...SkeletonCommonProps}
                        >
                            <ScrollView>
                                <SimpleText>{item.description}</SimpleText>
                            </ScrollView>
                        </Skeleton>
                    </View>
                </DetailsContainer>
            </Skeleton.Group>
        </Container>
    );
};
    // return (
    //     <ContainerVideo>
    //         <Video
    //             source={{ uri: item.hls_path }}
    //             rate={1.0}
    //             volume={1.0}
    //             isMuted={false}
    //             resizeMode={isFullscreen ? 'cover' : 'contain'}
    //             shouldPlay
    //             isLooping={false}
    //             style={{
    //                 width: '100%',
    //                 height: isFullscreen ? dimensions.height : 200,
    //             }}
    //             useNativeControls
    //             onPlaybackStatusUpdate={status => setStatus(() => status)}
    //             onLoadStart={handleLoadStart}
    //             onLoad={handleLoad}
    //         />
    //     </ContainerVideo>
    // )
// }
//     if (!isFullscreen) {
        
//         return (
//             <Container>
//                 <Skeleton.Group
//                 show={isLoading}>
//                     <DetailsContainer>
//                         <Title>
//                             {item.title}
//                         </Title>
//                             <Skeleton
//                                 height={200} 
//                                 width='98%'
//                                 radius={10}
//                                 marginLeft='auto'
//                                 marginRight='auto'
//                                 {...SkeletonCommonProps}>
//                                 {playerVideo}
//                             </Skeleton>
//                             <ContainerRow>
//                                 <SimpleText>Views: {viewedCount}</SimpleText>
//                                 <Icon
//                                     name="visibility"
//                                     size={30}
//                                     color="#000"
//                                 />
//                                 <SimpleText>Likes: {likedCount}</SimpleText>
//                                 <LikedButton onLikeToggle={ handleLikeToggle }/>
//                             </ContainerRow>
//                             <View>
//                                 <Skeleton
//                                 height='100%' 
//                                 width='98%'
//                                 radius={10}
//                                 marginLeft='auto'
//                                 marginRight='auto'
//                                 {...SkeletonCommonProps}>
//                                     <ScrollView>
//                                         <SimpleText>
//                                             { item.description }
//                                         </SimpleText>
//                                     </ScrollView>
//                                 </Skeleton>
//                             </View>
//                     </DetailsContainer>
//                 </Skeleton.Group>
//             </Container>
//         );
//     } else {
//         return (
//             {playerVideo}
//         )
//     };
// }

export default Details;