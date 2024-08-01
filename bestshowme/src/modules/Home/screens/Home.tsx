import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RootStackParamList } from '../../../routes/types';
import { useOrientation } from '../../../utils/usability.config/OrientationContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { Text, TouchableOpacity, FlatList, View, ActivityIndicator } from 'react-native';
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
    const { isFullscreen } = useOrientation();

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold
    });

    const [data, setData] = useState<ListVideos>();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setPage(1)
            fetchData(page, 7);
        }, [])
    );

    const fetchData = useCallback(async (page: number, perPage: number) => {
        try {
            setLoading(true);
            const response = await api.get('/videos', {
                params: {
                    _page: page,
                    _per_page: perPage
                }
            });
            if (response.data && response.data.data) {
                const fetchedVideos = response.data.data.filter((video: Video) =>
                    video.id && video.title && video.hls_path
                );
                setData(prevData => page === 1 ? fetchedVideos : [...prevData, ...fetchedVideos]);
                setHasMore(response.data.next !== null && fetchedVideos.length > 0);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Erro ao buscar vídeos:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            setPage(1);
            fetchData(1, 6);
        }, [fetchData])
    );

    const handleRefresh = () => {
        setRefreshing(true);
        setPage(1);
        fetchData(1, 6);
    };

    const handleEndReached = () => {
        if (!loading && hasMore) {
            setPage(prevPage => prevPage + 1);
            fetchData(page + 1, 6);
        }
    };

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={{ padding: 10 }}>
                <ActivityIndicator size="large" />
            </View>
        );
    };

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

    const handleItemClick = (item: Video) => {
        navigation.navigate('Details', { item });
    };

    const renderItem = ({ item }: { item: Video }) => (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
            <HomeCell item={item} isFullscreen={isFullscreen} />
        </TouchableOpacity>
    );

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>Startando o APP.</Title>
                <FlatList
                    data={data}
                    style={TableContainer}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.1}
                    showsVerticalScrollIndicator={false}
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    ListFooterComponent={renderFooter}
                />
                {loading && !refreshing && <Text>Carregando mais...</Text>}
            </Container>
        </ThemeProvider>
    );
}
