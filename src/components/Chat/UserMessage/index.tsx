import {FC, PropsWithChildren} from "react";

const UserMessage:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="max-w-[70%] bg-dark-bg-secondary p-2 rounded-2xl rounded-br-xs self-end whitespace-pre-line">
            <p>
                {children ?? 'ошибка загрузки вопроса'}
            </p>
        </div>
    );
};

export default UserMessage;
