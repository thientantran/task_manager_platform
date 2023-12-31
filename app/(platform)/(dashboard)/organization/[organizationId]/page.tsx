import { db } from '@/lib/db';
import Board from './Board';
import Form from './Form';
export default async function page() {
  const boards = await db.board.findMany();
  return (
    <div>
      <Form/>
      <div className='space-y-2'>
        {boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id}/>
        ))}
      </div>
    </div>
  )
}
