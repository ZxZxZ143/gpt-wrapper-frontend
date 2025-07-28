'use client'

import Chat from "@/components/Chat";
import Header from "@/components/Header";
import {useChat} from "@/Provider/chatProvider";
import {clsx} from "clsx";

export default function Home() {
    const {chatMessages} = useChat();

    return (
        <div className={clsx('min-h-screen w-full py-16 px-[8vw] flex flex-col justify-between', chatMessages.length !== 0 ? 'justify-end' : 'justify-between')}>

            {
                chatMessages.length === 0 && <Header />
            }

            <Chat />

        </div>
    );
}
