import React, { useState } from "react";
import { IconButton } from 'react-native-paper';
import { ContainerIcon } from './styles';
import theme from '../../../../utils/styles/theme';

interface LikedButtonProps {
    onLikeToggle: (liked: boolean) => void;
}

const LikedButton: React.FC<LikedButtonProps> = ({ onLikeToggle }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        onLikeToggle(newLikedState);
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
};

export default LikedButton;