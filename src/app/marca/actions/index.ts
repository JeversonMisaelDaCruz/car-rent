'use server'

import createMarca from "@/utils/marca"
import { revalidatePath } from "next/cache"

export default async function createActionMarca(nome:string) {
  await createMarca(nome)
  revalidatePath("/marca")
}