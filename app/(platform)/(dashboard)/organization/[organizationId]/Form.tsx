'use client'

import { create } from "@/actions/createBoard"
import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"

export default function Form() {
  const initialState = {message: '', errors: {}}
  const [state, dispatch] = useFormState(create, initialState)
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input id="title" name="title" required placeholder="Title" className="border-black border p-1" />
        <div className="text-rose-500"></div>
        {state?.errors?.title? (
          <div>
            {state.errors.title.map((error) => (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : null}
      </div>
        <Button type='submit'>
          Summit
        </Button>
      </form>
  )
}
