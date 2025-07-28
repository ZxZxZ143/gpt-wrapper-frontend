export enum EnumChatMessageType {
    USER = 'user',
    ROBOT = 'robot',
    ERROR = 'error',
}

export type ChatMessageType = {
    message: string;
    type: EnumChatMessageType;
}

export type ChatMessagesType = ChatMessageType[]
