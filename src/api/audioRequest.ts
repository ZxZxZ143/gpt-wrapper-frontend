import {AxiosInstance} from "@/api/axiosInstance";
import {GetAnswerResponseType} from "@/api/type";

export const audioRequest = async (formData: FormData) => {
    const { data } = await AxiosInstance.post<GetAnswerResponseType>('chat/audio', formData);

    return data;
}
