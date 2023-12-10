'use client'

import { create } from "@/actions/createBoard"
import { useFormState, useFormStatus } from "react-dom"
import FormButton from "./FormButton"
import FormInput from "./FormInput"

export default function Form() {
  const initialState = {message: '', errors: {}}
  const [state, dispatch] = useFormState(create, initialState)
  const {pending} = useFormStatus()
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors}/>
      </div>
        <FormButton name="submit"/>
      </form>
  )
}
