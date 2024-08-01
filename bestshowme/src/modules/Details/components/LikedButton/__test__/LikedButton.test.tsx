import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LikedButton from '../LikedButton';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../../../../utils/styles/theme';

describe('LikedButton', () => {
    it('should render correctly with initial liked state', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <LikedButton onLikeToggle={() => {}} isLiked={true} />
            </ThemeProvider>
        );
        
        const likeButton = getByTestId('like-button');
        console.log('Renderizado com estado inicial:', likeButton.toJSON());
        expect(likeButton).toBeTruthy();
    });

    it('should call onLikeToggle with the new liked state when toggled', () => {
        const onLikeToggleMock = jest.fn();
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <LikedButton onLikeToggle={onLikeToggleMock} isLiked={false} />
            </ThemeProvider>
        );
        
        const likeButton = getByTestId('like-button');
        fireEvent.press(likeButton);
        console.log('Renderizado com estado inicial:', likeButton.toJSON());
        expect(onLikeToggleMock).toHaveBeenCalledWith(true);
    });

    it('should update the icon when toggled', () => {
        const { getByTestId, rerender } = render(
            <ThemeProvider theme={theme}>
                <LikedButton onLikeToggle={() => {}} isLiked={false} />
            </ThemeProvider>
        );

        let likeButton = getByTestId('like-button');
        expect(likeButton).toBeTruthy();

        rerender(
            <ThemeProvider theme={theme}>
                <LikedButton onLikeToggle={() => {}} isLiked={true} />
            </ThemeProvider>
        );
        
        likeButton = getByTestId('like-button');
        console.log('Renderizado com estado inicial:', likeButton.toJSON());
        expect(likeButton).toBeTruthy();
    });
});