'use client'

import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

//Cria os itens do furmulario  e tipa eles com o zod
const marcaFormSchema = z.object({
  nome: z.string(),
})


type marcaFormValue = z.infer<typeof marcaFormSchema>

const defaultValues : Partial<marcaFormValue> ={
  nome: "",
}


export function MarcaForm(){
  const { toast } = useToast()
  const form = useForm<marcaFormValue>({
    resolver:zodResolver(marcaFormSchema),
    defaultValues
  })
  async function onSubmit(data:marcaFormValue) {
    
  }
}

