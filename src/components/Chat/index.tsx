'use client'

import PromptForm from "./PromptForm";
import {useChat} from "@/Provider/chatProvider";
import {useState} from "react";
import LoadingMessage from "@/components/Chat/LoadingMessage";
import {MessageTypeMapping} from "@/components/Chat/config";

const Chat = () => {
    const {chatMessages} = useChat();
    const [isAnswerLoading, setIsAnswerLoading] = useState<boolean>(false);

    const renderMessages = () => (
        chatMessages.map(({message, type}, index) => {
            const Component = MessageTypeMapping[type];

            // Использую индекс в качестве ключа, потому что массив с сообщениями не мутирует
            // и использование индекса в данном случае безопасно
            return <Component key={index} message={message} />
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
