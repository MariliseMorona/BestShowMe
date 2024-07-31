import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from '../../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import { Text, TouchableOpacity, VirtualizedList } from 'react-native';
import HomeCell from './subviews/HomeCell';
import { Container, Title, TableContainer } from '../../../components/styles';
import { Video } from '../../../services/model';
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
        api.get('videos/')
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
        return <Text>Erro:</Text>;
    }

    const handleItemClick = (item: Video) => {
        navigation.navigate('Details', {item})
    };

    const renderItem = ({ item }: { item: Video }) => (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
            <HomeCell item={item}></HomeCell>
        </TouchableOpacity>
    );
  
    const getItem = ( data: Video[], index: number ) => {
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
                        keyExtractor={item => item.id}
                        getItemCount={getItemCount}
                        getItem={getItem}
                    />
            </Container>
        </ThemeProvider>
    );
}