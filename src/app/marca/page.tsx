import MarcaForm from "@/components/form/marca";
import TableMarca from "@/components/tableMarca";
import db from "@/utils/prisma";

export default async function Marca() {
  const marcas = await db.marca.findMany();

  return (
    <>
      <MarcaForm />
      <TableMarca marcas={marcas}/>
    </>
  );
}
