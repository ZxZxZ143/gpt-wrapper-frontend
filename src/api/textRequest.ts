import {AxiosInstance} from "@/api/axiosInstance";
import {GetAnswerRequestType, GetAnswerResponseType} from "@/api/type";

export const getAnswer = async (req: GetAnswerRequestType) => {
    const {data} = await AxiosInstance.post<GetAnswerResponseType>('/chat', req)

    return data
}
