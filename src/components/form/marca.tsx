"use client";

import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CreateActionMarca from "@/app/marca/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getMarca } from "@/utils/marca";

//Cria os itens do furmulario  e tipa eles com o zod
const marcaFormSchema = z.object({
  nome: z.string().min(4,"No minimo 4 caracteres").max(25,"Limite maximo de caracter excedido"),
});

type marcaFormValue = z.infer<typeof marcaFormSchema>;

const defaultValues: Partial<marcaFormValue> = {
  nome: "",
};

export default  function MarcaForm() {
  const { toast } = useToast();

  const form = useForm<marcaFormValue>({
    resolver: zodResolver(marcaFormSchema),
    defaultValues,
  });

  async function onSubmit(data: marcaFormValue) {
    const { nome } = data;

    if (nome === null) {
      toast({
        title: "Erro",
        description: "Voce deve digitar o campo",
        variant: "destructive",
      });
      return;
    }

    try {
      await CreateActionMarca(nome);
      toast({
        title: "Sucesso",
        description: "Cadastrado com sucesso",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "erro",
        description: "Erro inesperado aconteceu",
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da marca</FormLabel>
              <FormControl>
                <Input placeholder="Marca" {...field} />
              </FormControl>
              <FormDescription>Nome da marca do veiculo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type="submit">Cadastrar</Button>
      </form>
    </Form>
  );
}
