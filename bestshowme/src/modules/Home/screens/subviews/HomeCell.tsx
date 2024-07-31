import React from 'react';
import { CellContainer, Subtitle } from '../../../../components/styles';
import { ImageContainer } from '../../components/styles';
import { Video } from '../../../../services/model';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface HomeCellProps {
    item: Video; 
}

export default function HomeCell({ item }: HomeCellProps) {
    return (
        <CellContainer>
            <View>
            <ImageContainer
                source={{ uri: item.thumbnail }}
                resizeMode="contain"
            />
            </View>
            <View>
            <Subtitle>
                { item.title }
            </Subtitle>
            <Feather name="more-vertical" size={20}/>
            </View>
        </CellContainer>
    )
}