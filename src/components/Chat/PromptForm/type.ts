import {InferType} from "yup";
import {PROMPT_FORM_VALIDATION_SCHEMA} from "@/components/Chat/PromptForm/config";

export type PromptFormType = InferType<typeof PROMPT_FORM_VALIDATION_SCHEMA>
