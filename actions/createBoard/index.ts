"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createSafeAction } from "@/lib/createSafeAction";
import { db } from "@/lib/db";

import { CreateBoardSchema } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title } = data;

  let board;

  try {
    // throw new Error("balbala");
    board = await db.board.create({
      data: {
        title,
      }
    });
  } catch (error) {
    return {
      error: "Failed to create."
    }
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoardSchema, handler);