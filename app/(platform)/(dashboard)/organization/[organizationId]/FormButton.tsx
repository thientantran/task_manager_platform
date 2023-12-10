import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface FormButtonProps{
  name: string
}

export default function FormButton({name}: FormButtonProps) {
  const {pending} = useFormStatus()
  return (
    <Button disabled={pending} type='submit'>
        {name}
    </Button>
  )
}
