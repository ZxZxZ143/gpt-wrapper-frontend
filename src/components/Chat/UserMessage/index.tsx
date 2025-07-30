import {FC} from "react";

type UserMessageProps = {
    message: string;
}

const UserMessage:FC<UserMessageProps> = ({message}) => {
    return (
        <div className="max-w-[70%] bg-dark-bg-secondary p-2 rounded-2xl rounded-br-xs self-end whitespace-pre-line">
            <p>
                {message ?? 'ошибка загрузки вопроса'}
            </p>
        </div>
    );
};

export default UserMessage;
