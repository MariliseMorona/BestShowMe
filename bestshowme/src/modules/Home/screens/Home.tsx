import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, useFocusEffect} from "@react-navigation/native";
import { RootStackParamList } from '../../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { Text, TouchableOpacity, FlatList, View } from 'react-native';
import HomeCell from './subviews/HomeCell';
import { Container, Title, TableContainer, SimpleText } from '../../../components/styles';
import { Video, ListVideos } from '../services/model';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { api } from '../../../services/api';

export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold
    })

    const [data, setData] = useState<ListVideos>()
    const [pagination, setPagination] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [localVideos, setLocalVideos] = useState<Video[]>([]);
    const [refresh, setRefresh] = useState(false);

    useFocusEffect(
        useCallback(() => {
            setPagination(1)
            fetchData(pagination, 7);
        }, [])
    );

    const fetchData = useCallback(async (page: number, perPage: number) => {
        try {
            setLoading(true);
            const response = await api.get('videos/', {
                params: {
                    _page: page,
                    _per_page: perPage
                }
            });
            if (response.data && response.data.data) {
                console.log('response:', response);
                setTotalItems(response.data.items);
                const validVideos = response.data.data.filter((video: Video) => 
                    video.id && video.title && video.hls_path
                );
                setLocalVideos(prevVideos => {
                    const videoMap = new Map<string, Video>();
                    prevVideos.forEach(video => videoMap.set(video.id, video));
                    validVideos.forEach((video: Video) => videoMap.set(video.id, video));
                    return Array.from(videoMap.values());
                });
                setData(prevData => {
                        if (prevData) {
                            return {
                                ...prevData,
                                ...response.data,
                                data: [...prevData.data, ...response.data.data]
                            };
                        } else {
                            return response.data;
                        }
                    });
                setHasMore(response.data.next !== null && validVideos.length > 0);
                setRefresh(prev => !prev);
            } else {
                console.log('false:', response);
                setHasMore(false);
            }
        } catch (error) {
            console.error('Request error:', error);
            setError(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData(pagination, 7);
    }, [fetchData, pagination]);

    useEffect(() => {
        if (localVideos.length >= totalItems) {
            setHasMore(false);
        }
    }, [localVideos, totalItems]);

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

    if (error) {
        return <Text>Erro:</Text>;
    }

    const handleItemClick = (item: Video) => {
        navigation.navigate('Details', {item})
    };

    const renderItem = ({ item }: { item: Video }) => (
        console.log('renderItem:', item),
        <TouchableOpacity onPress={() => handleItemClick(item)}>
            <HomeCell item={item}></HomeCell>
        </TouchableOpacity>
    );
  
    const getItem = (data: Video[], index: number) => data[index];
    const getItemCount = (data: Video[] | undefined) => {
        if (!data) return 0;
        return data.filter(video => video.id && video.title && video.hls_path).length;
    };

    const handleEndReached = () => {
        if (!loading && hasMore) {
            setPagination(prevPage => prevPage + 1);
        }
    };

  const keyExtractor = (item: Video) => item.id;

  const ListEmptyComponent = () => {
    return (
        <View>
            <SimpleText>
                Sua lista esta vazia.
            </SimpleText>
        </View>
    )
  }
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>Startando o APP.</Title>
                    {/* <TableContainer> */}
                        <FlatList
                            data={data?.data}
                            style={TableContainer}
                            // contentContainerStyle={{ paddingBottom: 10 }}
                            renderItem={renderItem}
                            initialNumToRender={4}
                            keyExtractor={keyExtractor}
                            numColumns={2}
                            onEndReached={handleEndReached}
                            onEndReachedThreshold={0.1}
                            showsVerticalScrollIndicator={false}
                            extraData={refresh}
                            ListFooterComponent={ListEmptyComponent}
                        /> 
                    {/* </TableContainer> */}
                     {loading && <Text>Carregando mais...</Text>}
            </Container>
        </ThemeProvider>
    );
}