import {Skeleton} from "@/components/ui/skeleton";

const LoadingMessage = () => {
    return (
        <div className="w-full p-2 self-start flex flex-col gap-3">
            <p>Answer processing...</p>
            <Skeleton className="w-[20%] h-4" />
            <Skeleton className="w-[80%] h-4 mt-3" />
            <Skeleton className="w-[50%] h-4" />
            <Skeleton className="w-[40%] h-4 mt-3" />
            <Skeleton className="w-[10%] h-4" />
        </div>
    );
};

export default LoadingMessage;
