import { deleteBoard } from "@/actions/deleteBoard"
import { Button } from "@/components/ui/button"

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
      <Button type="submit" size='sm'>
          Delete
      </Button>
    </form>
  )
}
