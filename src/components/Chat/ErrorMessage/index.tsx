import {FC} from "react";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {AlertCircleIcon} from "lucide-react";

type ErrorMessageProps = {
    message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({message}) => {
    return (
        <Alert variant="destructive" className="max-w-[30%] self-start whitespace-pre-line">
            <AlertCircleIcon />
            <AlertTitle>{message}</AlertTitle>
        </Alert>
    );
};

export default ErrorMessage;
