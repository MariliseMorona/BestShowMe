import React from 'react';
import { Text, VirtualizedList } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '../../../utils/styles/theme';
import HomeCell from './subviews/HomeCell';
import { Container, Title, TableContainer } from '../../../components/styles';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';

export default function Home() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  })

    interface Item {
        key: string;
        title: string;
        image: string;
    }

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;
    }

    const data = [
        { key: 'item 1', title: 'Item 1', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
        { key: 'item 2', title: 'Item 2', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
        { key: 'item 3', title: 'Item 3', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
        { key: 'item 4', title: 'Item 4', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
        { key: 'item 5', title: 'Item 5', image: 'https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg?t=st=1722049162~exp=1722052762~hmac=4e843acd3c924eccc8a988adebc3a621e51afe9b018f7b8e60d4157eb7c0beba&w=1380'},
    ]

    const renderItem = ({ item }: { item: Item }) => (
        <HomeCell item={item}></HomeCell>
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