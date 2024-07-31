import React from 'react';
import { CellContainer, Subtitle } from '../../../../components/styles';
import { ImageContainer } from '../../components/styles';
import { Video } from '../../../../services/model';

interface HomeCellProps {
    item: Video; 
}

export default function HomeCell({ item }: HomeCellProps) {
    return (
        <CellContainer>
            <Subtitle>
                { item.title }
            </Subtitle>
            <ImageContainer
                source={{ uri: item.thumbnail }}
                resizeMode="contain"
            />
        </CellContainer>
    )
}