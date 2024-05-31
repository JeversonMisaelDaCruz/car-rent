'use server'

import {createMarca, DeleteMarca} from "@/utils/marca"
import { revalidatePath } from "next/cache"

export default async function CreateActionMarca(nome:string) {
  await createMarca(nome)
  revalidatePath("/marca")
}

export  async function DeleteActionMarca(id:string) {
  await DeleteMarca(id)
  revalidatePath("/marca")
};
