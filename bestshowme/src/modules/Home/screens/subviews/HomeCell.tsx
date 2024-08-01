import React, { useState } from 'react';
import { CellContainer, ContainerRow, Subtitle } from '../../../../components/styles';
import { ImageContainer } from '../../components/styles';
import { Video } from '../../services/model';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Skeleton } from 'moti/skeleton';
import { SkeletonCommonProps } from '../../../../components/styles.animations';

interface HomeCellProps {
    item: Video; 
}

export default function HomeCell({ item }: HomeCellProps) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <CellContainer>
            <Skeleton.Group show={!isImageLoaded}>
                <View>
                    <Skeleton 
                        height={230} 
                        width="100%"
                        radius={10}
                        {...SkeletonCommonProps}
                        style={{ position: 'absolute', top: 0, left: -16, bottom: 0, right: 16 }}>
                            <ImageContainer
                                source={{ uri: item.thumbnail }}
                                resizeMode="contain"
                                onLoad={ handleImageLoad }
                            />
                    </Skeleton>
                </View> 
                <View>
                    <ContainerRow>
                        <View>
                            <Skeleton
                                height={70} 
                                width="100%" 
                                radius={10}
                                {...SkeletonCommonProps}
                                style={{ position: 'absolute', top: 0, left: -16, bottom: 0, right: 16 }}>
                                    <Subtitle>
                                        { item.title }
                                    </Subtitle>
                            </Skeleton>
                        </View>    
                        <Feather name="more-vertical" size={20}/>
                    </ContainerRow>
                </View>
            </Skeleton.Group>
        </CellContainer>
    )
}