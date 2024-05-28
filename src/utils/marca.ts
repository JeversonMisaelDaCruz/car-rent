import db from "./prisma";
//Realizamos uma function asyncrina para criacao de marca
// Utilizamos o try criamos a variavel creatMarca] e linkamos ela no nosso db e fazemos seu retorno
//catch e uma "variavel" de caso acontenteca um erro, entao caso ocorrra um erro ele ira me retornar o erro
export default async function createMarca(nome: string) {
  try {
    const createMarca = await db.marca.create({
      data: { nome },
    });
    return { createMarca };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
