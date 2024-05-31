"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiTrash } from "react-icons/ci";
import { string } from "zod";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { DeleteActionMarca } from "@/app/marca/actions";

export default function TableMarca({ marcas }: any) {
  const { toast } = useToast();
  const handlerDeleteMarca = async (id: string) => {
    await DeleteActionMarca(id);
    toast({
      title: "Deletado",
      description: "Deletado com sucesso",
      variant: "destructive",
    });
  };

  return (
    <Table>
      <TableCaption>Lista de marcas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Marca</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {marcas.map((marca: any) => (
          <TableRow key={marca.id}>
            <TableCell className="font-medium">{marca.id}</TableCell>
            <TableCell className="font-medium">{marca.nome}</TableCell>
            <TableCell className="font-medium">
              <CiTrash onClick={() => handlerDeleteMarca(marca.id)} />{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
