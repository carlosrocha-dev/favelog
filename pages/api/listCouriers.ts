// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from './clientPrisma'

export default async function listCouriers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const couriersQuery = await prisma.courier.findMany({
    include: {
      deliveries: true
    }
  })
  res.status(200).json(couriersQuery)
}
