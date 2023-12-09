import { create } from '@/actions/createBoard';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import Board from './Board';
export default async function page() {
  const boards = await db.board.findMany();
  return (
    <div>
      <form action={create}>
        <input id="title" name="title" required placeholder="Title" className="border-black border p-1" />
        <Button type='submit'>
          Summit
        </Button>
      </form>
      <div className='space-y-2'>
        {boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id}/>
        ))}
      </div>
    </div>
  )
}
