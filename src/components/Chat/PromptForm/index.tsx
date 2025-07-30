import {FC, useRef, useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {ChevronRight, Circle, Mic} from "lucide-react";
import {Controller, useForm} from "react-hook-form";
import {PromptFormType} from "@/components/Chat/PromptForm/type";
import {PROMPT_FORM_INITIAL_VALUE, PROMPT_FORM_VALIDATION_SCHEMA} from "@/components/Chat/PromptForm/config";
import {yupResolver} from "@hookform/resolvers/yup";
import {useChat} from "@/Provider/chatProvider";
import {EnumChatMessageType} from "@/Provider/type";
import {getAnswer} from "@/api/textRequest";

type PromptFormProps = {
    isAnswerLoading: boolean;
    setIsAnswerLoading: (isAnswerLoading: boolean) => void;
}

const PromptForm: FC<PromptFormProps> = ({isAnswerLoading, setIsAnswerLoading}) => {
    const {control, reset, handleSubmit, getValues, setValue} = useForm<PromptFormType>({
        defaultValues: PROMPT_FORM_INITIAL_VALUE,
        resolver: yupResolver(PROMPT_FORM_VALIDATION_SCHEMA)
    })
    const {chatMessagesReducer} = useChat();
    const recognitionRef = useRef(null);
    const [isListening, setIsListening] = useState<boolean>(false);

    const startSpeechRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert('Ваш браузер не поддерживает Web Speech API (Speech Recognition).');

            return;
        }

        setIsListening(true);
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.lang = 'ru-RU';
        recognition.interimResults = false;
        recognition.continuous = false;

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                const transcript = event.results[i][0].transcript;
                setValue('prompt', getValues('prompt') + transcript);
            }
        };

        recognition.onerror = () => {
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    }

    const stopListening = () => {
        if (recognitionRef?.current) {
            (recognitionRef.current as { stop: () => void }).stop();
            setIsListening(false);
        }
    }

    const onSubmit = handleSubmit(async (values: PromptFormType) => {
        setIsAnswerLoading(true)

        chatMessagesReducer({
            type: EnumChatMessageType.USER,
            message: values.prompt,
        })

        try {
            const res = await getAnswer(values);

            chatMessagesReducer({
                type: EnumChatMessageType.ROBOT,
                message: res.answer,
            })
        } catch (error: unknown) {
            const errMessage = (error instanceof Error) ? error.message : 'Something went wrong'

            chatMessagesReducer({
                type: EnumChatMessageType.ERROR,
                message: errMessage,
            });
        }

        setIsAnswerLoading(false)

        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
        reset();
    })
    return (
        <form onSubmit={onSubmit}
              className="flex items-stretch lg:max-w-[30%] sm:max-w-[50%] max-w-[95%] w-full h-fit bg-transparent rounded-xl border-3 border-dark-border">
            <button type="button" onClick={isListening ? stopListening : startSpeechRecognition} className="p-2 cursor-pointer">
                {
                    isListening ? (
                        <Circle size={24} className="fill-dark-bg-secondary"/>
                    ) : (
                        <Mic size={24} className="stroke-dark-bg-secondary"/>
                    )
                }
            </button>
            <Controller
                render={({field}) => (
                    <Textarea
                        {...field}
                        name="prompt"
                        className="border-0 focus-visible:ring-0 resize-none shadow-none max-h-32"
                        placeholder="Ask whatever you want"
                    />
                )}
                name="prompt"
                control={control}
            />

            <button
                type="submit"
                className="px-2 rounded-[12px] w-fit cursor-pointer transition bg-dark-bg-secondary hover:bg-dark-text-secondary disabled:pointer-events-none disabled:bg-dark-text-secondary disabled:cursor-alias"
                disabled={isAnswerLoading}
            >
                <ChevronRight size={24} className="stroke-2"/>
            </button>
        </form>
    );
};

export default PromptForm;
