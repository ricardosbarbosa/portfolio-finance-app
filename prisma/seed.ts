// this is the file that will be run when you run `yarn prisma seed`

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Seed the database with users
  const user1 = await prisma.user.create({
    data: {
      email: "rbrico@gmail.com",
      name: "Ricardo",
      password: await hash("123456", 10),
      role: "ADMIN",
    },
  });
}

main();
