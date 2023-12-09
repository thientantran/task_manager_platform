'use server'

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

export type State = {
  errors?: {
    title?: string[];
  },
  message?: string | null;
}

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Minium length of 3 letters is required"
  })
})

export async function create(prevState: State, formData:FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title")
  })

  if(!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      // nếu có error thì trả về mảng, bởi vì 1 form có nhiều cái, ở trường hợp này chỉ có 1 field là title thôi, chứ bình thường 1 form có nhiều field, do đó sẽ validate nhiều field, và trả về 1 mảng error lun
      message: 'Missing fields.'
    }
  }
  const {title} = validatedFields.data
  try {
    await db.board.create({
      data: {
        title
      }
    })
  } catch (error) {
    return {
      message: "Database Error"
    }
  }


  revalidatePath("/organization/org_2Z9phcspXhUB0haxP9Yh8gXYSy9")
  redirect("/organization/org_2Z9phcspXhUB0haxP9Yh8gXYSy9")
}