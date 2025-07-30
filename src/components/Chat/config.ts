import {EnumChatMessageType} from "@/Provider/type";
import ErrorMessage from "@/components/Chat/ErrorMessage";
import RobotMessage from "@/components/Chat/RobotMessage";
import UserMessage from "@/components/Chat/UserMessage";

export const MessageTypeMapping = {
    [EnumChatMessageType.ERROR]: ErrorMessage,
    [EnumChatMessageType.ROBOT]: RobotMessage,
    [EnumChatMessageType.USER]: UserMessage,
}
