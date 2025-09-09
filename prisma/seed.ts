// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create user types
  const userTypes = await Promise.all([
    prisma.userType.upsert({
      where: { name: 'athlete' },
      update: {},
      create: { name: 'athlete' },
    }),
    prisma.userType.upsert({
      where: { name: 'coach' },
      update: {},
      create: { name: 'coach' },
    }),
    prisma.userType.upsert({
      where: { name: 'manager' },
      update: {},
      create: { name: 'manager' },
    }),
  ])

  // Create some sports
  const sports = await Promise.all([
    prisma.sport.upsert({
      where: { name: 'Basketball' },
      update: {},
      create: { name: 'Basketball', description: 'Basketball' },
    }),
    prisma.sport.upsert({
      where: { name: 'Soccer' },
      update: {},
      create: { name: 'Soccer', description: 'Soccer/Football' },
    }),
    prisma.sport.upsert({
      where: { name: 'Swimming' },
      update: {},
      create: { name: 'Swimming', description: 'Competitive Swimming' },
    }),
  ])

  console.log('Seed data created:', { userTypes, sports })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })