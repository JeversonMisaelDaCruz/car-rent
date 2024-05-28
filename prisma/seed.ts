const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Criar tipos de veículos
  const tipoCarro = await prisma.tipoVeiculo.create({
    data: {
      nome: 'Carro',
    },
  });

  const tipoMoto = await prisma.tipoVeiculo.create({
    data: {
      nome: 'Moto',
    },
  });

  // Criar marcas
  const marcaToyota = await prisma.marca.create({
    data: {
      nome: 'Toyota',
    },
  });

  const marcaHonda = await prisma.marca.create({
    data: {
      nome: 'Honda',
    },
  });

  // Criar modelos
  const modeloCorolla = await prisma.modelo.create({
    data: {
      nome: 'Corolla',
      marca: {
        connect: { id: marcaToyota.id },
      },
    },
  });

  const modeloCivic = await prisma.modelo.create({
    data: {
      nome: 'Civic',
      marca: {
        connect: { id: marcaHonda.id },
      },
    },
  });

  const modeloCB500 = await prisma.modelo.create({
    data: {
      nome: 'CB 500',
      marca: {
        connect: { id: marcaHonda.id },
      },
    },
  });

  // Criar veículos
  await prisma.veiculo.create({
    data: {
      ano: 2021,
      placa: 'ABC-1234',
      tipo: {
        connect: { id: tipoCarro.id },
      },
      modelo: {
        connect: { id: modeloCorolla.id },
      },
    },
  });

  await prisma.veiculo.create({
    data: {
      ano: 2020,
      placa: 'XYZ-5678',
      tipo: {
        connect: { id: tipoCarro.id },
      },
      modelo: {
        connect: { id: modeloCivic.id },
      },
    },
  });

  await prisma.veiculo.create({
    data: {
      ano: 2022,
      placa: 'MNO-9101',
      tipo: {
        connect: { id: tipoMoto.id },
      },
      modelo: {
        connect: { id: modeloCB500.id },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
