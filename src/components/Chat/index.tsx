'use client'

import UserMessage from "./UserMessage";
import RobotMessage from "@/components/Chat/RobotMessage";
import PromptForm from "./PromptForm";
import {useChat} from "@/Provider/chatProvider";
import {EnumChatMessageType} from "@/Provider/type";
import {useState} from "react";
import LoadingMessage from "@/components/Chat/LoadingMessage";
import ErrorMessage from "./ErrorMessage";

const Chat = () => {
    const {chatMessages} = useChat();
    const [isAnswerLoading, setIsAnswerLoading] = useState<boolean>(false);

    const renderMessages = () => (
        chatMessages.map(({message, type}, index) => {
            if (type === EnumChatMessageType.USER) {
                return (
                    <UserMessage key={index}>
                        {message}
                    </UserMessage>
                )
            } else if (type === EnumChatMessageType.ROBOT) {
                return (
                    <RobotMessage key={index} message={message} />
                )
            } else if (type === EnumChatMessageType.ERROR) {
                return (
                    <ErrorMessage key={index}>{message}</ErrorMessage>
                )
            }
        })
    )

    return (
        <div className="w-full h-fit flex flex-col gap-8">
            <div className="flex flex-col justify-end gap-8 w-full h-fit">
                {renderMessages()}
                {isAnswerLoading && <LoadingMessage />}
            </div>
            <PromptForm isAnswerLoading={isAnswerLoading} setIsAnswerLoading={setIsAnswerLoading} />
        </div>
    );
};

export default Chat;
