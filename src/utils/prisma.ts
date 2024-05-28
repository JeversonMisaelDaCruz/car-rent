import { PrismaClient } from '@prisma/client'
//Nao precisa lembrar deste codigo e apenas uma forma de conectar ao banco de dados utilizando prisma em TS
declare global {
  var cachedPrismaClient: PrismaClient | undefined
}

let db: PrismaClient

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient()
} else {
  if (!global.cachedPrismaClient) {
    global.cachedPrismaClient = new PrismaClient()
  }
  db = global.cachedPrismaClient
}

export default db