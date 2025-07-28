import {FC, PropsWithChildren} from "react";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {AlertCircleIcon} from "lucide-react";

const ErrorMessage: FC<PropsWithChildren> = ({children}) => {
    return (
        <Alert variant="destructive" className="max-w-[30%] self-start whitespace-pre-line">
            <AlertCircleIcon />
            <AlertTitle>{children}</AlertTitle>
        </Alert>
    );
};

export default ErrorMessage;
