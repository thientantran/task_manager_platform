'use client'
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

interface FormInputProps {
  errors?: {
    title?: string[]
  }
}
export default function FormInput({errors} : FormInputProps) {
  const {pending} = useFormStatus()
  return (
    <div>
      <Input disabled={pending} id="title" name="title" required placeholder="Title" />
        {errors?.title? (
          <div>
            {errors.title.map((error) => (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : null}
    </div>
  )
}
