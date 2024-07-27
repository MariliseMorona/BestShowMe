import React, { useState } from "react";
import { IconButton } from 'react-native-paper';
import { ContainerIcon } from './styles';
import theme from '../../../../utils/styles/theme';

export default function LikedButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return(
        <ContainerIcon>
            <IconButton
                icon={ liked ? 'heart' : 'heart-outline' }
                background={liked ? theme.colors.pink : theme.colors.white }
                // color={liked ? colors.pink : colors.white}
                size={30}
                onPress={toggleLike}
            />
        </ContainerIcon>
    );
}