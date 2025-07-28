import type {FC, ReactNode} from 'react';
import CodeBlock from "@/components/Chat/RobotMessage/CodeBlock";

type RobotMessageProps = {
    message: string;
}

const RobotMessage:FC<RobotMessageProps> = ({message}) => {

    const renderMessage = (): ReactNode => {
        if (!message.includes('```')) {
            return (
                <p>{message}</p>
            )
        }

        const messageSeparated = message.split('``');

        let isOpen = false;

        return messageSeparated.map((message, index) => {
            if (!message.startsWith('`')) {
                isOpen = false;

                return (
                    <p key={index}>{message}</p>
                )
            }

            message = message.replace('`', '')

            if (isOpen) {
                isOpen = false;

                return (
                    <p key={index}>{message}</p>
                )
            }

            isOpen = true

            const lang = message.substring(0, message.indexOf(' '))

            return <CodeBlock key={index} code={message.substring(0)} language={lang} />
        })
    }

    return (
        <div className="w-full p-2 self-start whitespace-pre-line">
            {
                renderMessage()
            }
        </div>
    );
};

export default RobotMessage;
