'use client'
import { deleteBoard } from "@/actions/deleteBoard"
import FormButton from "./FormButton"

interface BoardProps {
  title: string
  id: string
}
export default function Board({title, id}: BoardProps ) {
  const deleteBoardWithId = deleteBoard.bind(null, id)
  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>
        Board title: {title}
      </p>
      <FormButton name="Delete"/>
    </form>
  )
}
