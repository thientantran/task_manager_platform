'use client'

import { createBoard } from "@/actions/createBoard"
import { useAction } from "@/hooks/useAction"
import FormButton from "./FormButton"
import FormInput from "./FormInput"

export default function Form() {

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!")
    },
    onError: (error) => {
      console.error(error);
    }
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  }
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors}/>
      </div>
        <FormButton name="submit"/>
      </form>
  )
}
