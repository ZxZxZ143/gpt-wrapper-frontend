'use client'

import {createContext, FC, PropsWithChildren, useContext, useState} from "react";
import {ChatMessagesType, ChatMessageType} from "@/Provider/type";

type ChatContextType = {
    chatMessages: ChatMessagesType;
    chatMessagesReducer: (newMessages: ChatMessageType) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider:FC<PropsWithChildren> = ({children}) => {
    const [chatMessages, setChatMessages] = useState<ChatMessagesType>([]);

    const chatMessagesReducer = (newMessage: ChatMessageType) => {
        setChatMessages(prev => [
            ...prev,
            newMessage
        ]);
    }

    return (
       <ChatContext.Provider value={{chatMessages, chatMessagesReducer}}>
           {children}
       </ChatContext.Provider>
    )
}

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
}
