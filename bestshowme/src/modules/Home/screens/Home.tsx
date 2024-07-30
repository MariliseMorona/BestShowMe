import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from '../../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { Text, TouchableOpacity, VirtualizedList } from 'react-native';
import HomeCell from './subviews/HomeCell';
import { Container, Title, TableContainer } from '../../../components/styles';
import { Item } from '../../../services/model';
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

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

    if (error) {
        return <Text>Erro: {error}</Text>;
    }

    // const data = [
    //     { key: 'item 1', title: 'Item 1', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
    //     { key: 'item 2', title: 'Item 2', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
    //     { key: 'item 3', title: 'Item 3', image: 'https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/741bd684-48f6-49b3-8422-084e3ed3180a/playlist.m3u8'},
    //     { key: 'item 4', title: 'Item 4', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
    //     { key: 'item 5', title: 'Item 5', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
    // ]

    const handleItemClick = (item: Item) => {
        navigation.navigate('Details', {item})
    };

    const renderItem = ({ item }: { item: Item }) => (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
            <HomeCell item={item}></HomeCell>
        </TouchableOpacity>
    );
  
    const getItem = ( data: Item[], index: number ) => {
        return data[index]
    };

    const getItemCount = () => data.length;

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title>Startando o APP.</Title>
                    <VirtualizedList 
                        data={data} 
                        style={TableContainer}
                        renderItem={renderItem} 
                        initialNumToRender={4}
                        keyExtractor={item => item.key}
                        getItemCount={getItemCount}
                        getItem={getItem}
                    />
            </Container>
        </ThemeProvider>
    );
}