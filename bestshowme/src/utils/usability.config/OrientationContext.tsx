import React, { createContext, useState, useContext, ReactNode } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

interface OrientationContextProps {
    isFullscreen: boolean;
    toggleOrientation: () => void;
}

const OrientationContext = createContext<OrientationContextProps | undefined>(undefined);

export const OrientationProvider = ({ children }: { children: ReactNode }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const changesScreenOrientation = async (fullscreen: boolean) => {
        if (fullscreen) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        } else {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    };

    const toggleOrientation = () => {
        setIsFullscreen((prev) => {
            const newFullscreen = !prev;
            changesScreenOrientation(newFullscreen);
            return newFullscreen;
        });
    };

    return (
        <OrientationContext.Provider value={{ isFullscreen, toggleOrientation }}>
            {children}
        </OrientationContext.Provider>
    );
};

// Hook para usar o contexto
export const useOrientation = () => {
    const context = useContext(OrientationContext);
    if (!context) {
        throw new Error('useOrientation deve ser usado dentro de um OrientationProvider');
    }
    return context;
};