import db from "@/utils/prisma";

//aqui nos deixamos a pagina asincrona afim de utilzizar os dados que vamos consumir do nosso banco de dados atravez do prisma
export default async function Home() {
  //criamos a variavel para puxar do nosso banco de dados as informacoes de veiculos
  const veiculos = await db.veiculo.findMany({
    include: {
      //dentro deste campo fazemos um include afim de incluir o campo modelo dentro de veiculo "inner join"
      modelo: {
        select: {
          nome: true,

        },
      },
      tipo: true,
    },
  });
  //Nesta area ele realiza um map do campo veiculos que puxamos acima
  //fizemos o map para separa os dados que queremos utilizar no exemplo abaixo puxei campos diferentes da tabela veiculo
  return (
    <>
      {veiculos.map((veiculo) => (
        <div key={veiculo.id}>
          <h1>{veiculo.ano}</h1>
          <h1>{veiculo.placa}</h1>
          <h1>{veiculo.modelo.nome}</h1>
        </div>
      ))}
    </>
  );
}
