import React, { useState, useEffect } from "react";
import { IconButton } from 'react-native-paper';
import { ContainerIcon } from './styles';
import theme from '../../../../utils/styles/theme';

interface LikedButtonProps {
    onLikeToggle: (liked: boolean) => void;
    isLiked:  boolean
}

const LikedButton: React.FC<LikedButtonProps> = ({ onLikeToggle, isLiked }) => {
    const [liked, setLiked] = useState(isLiked);

    useEffect(() => {
        setLiked(isLiked);
    }, [isLiked]);

    const toggleLike = () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        onLikeToggle(newLikedState);
    };


    return(
        <ContainerIcon>
            <IconButton
                icon={ liked ? 'thumb-up' : 'thumb-up-outline' }
                background={liked ? theme.colors.pink : theme.colors.white }
                size={30}
                onPress={toggleLike}
            />
        </ContainerIcon>
    );
};

export default LikedButton;