'use client';

import React, { createContext, useState } from 'react';

export const WindowsContext = createContext<{
    windows: string[];
    prevDraggedWindow: string;
    setDraggedWindow: (window: string) => void;
    addWindow: (newWindow: string) => void;
    removeWindow: (windowToRemove: string) => void
}>({
    windows: [],
    prevDraggedWindow: '',
    setDraggedWindow: () => { },
    addWindow: () => { },
    removeWindow: () => { }
});

export const WindowsProvider = ({ children }: any) => {
    const [windows, setWindows] = useState([] as string[]);
    const [prevDraggedWindow, setPrevDraggedWindow] = useState('');

    const addWindow = (newWindow: string) => {
        setWindows([...windows, newWindow]);
    };

    const removeWindow = (windowToRemove: string) => {
        setWindows(windows.filter(window => window !== windowToRemove));
    };

    const setDraggedWindow = (window: string) => {
        setPrevDraggedWindow(window);
    }

    return (
        <WindowsContext.Provider value={{ windows, prevDraggedWindow, setDraggedWindow, addWindow, removeWindow }}>
            {children}
        </WindowsContext.Provider>
    );
};