import { Board } from "@prisma/client";
import { z } from "zod";

import { ActionState } from "@/lib/createSafeAction";

import { CreateBoardSchema } from "./schema";

export type InputType = z.infer<typeof CreateBoardSchema>;
export type ReturnType = ActionState<InputType, Board>;