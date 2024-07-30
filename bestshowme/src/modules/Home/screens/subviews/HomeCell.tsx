import React from 'react';
import { CellContainer, Subtitle } from '../../../../components/styles';
import { Image } from 'react-native';
import { VideoContainer } from '../../components/styles';

interface HomeCellProps {
    item: { key: string, title: string, image: string }; 
}

export default function HomeCell({ item }: HomeCellProps) {
    return (
        <CellContainer>
            <Subtitle>
                { item.title }
            </Subtitle>
            <VideoContainer
                source={{ uri: item.image }}
                resizeMode="contain"
            />
        </CellContainer>
    )
}