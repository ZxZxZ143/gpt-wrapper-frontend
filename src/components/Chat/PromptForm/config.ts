import * as yup from 'yup';
import {PromptFormType} from "@/components/Chat/PromptForm/type";

export const PROMPT_FORM_VALIDATION_SCHEMA = yup.object({
    prompt: yup.string().trim().required('Поле не может быть пустым'),
})

export const PROMPT_FORM_INITIAL_VALUE: PromptFormType = {
    prompt: '',
}
