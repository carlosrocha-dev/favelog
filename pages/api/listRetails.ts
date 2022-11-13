// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from './clientPrisma'

export default async function listRetails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const retailsQuery = await prisma.retail.findMany({
    include: {
      deliveries: true
    }
  })
  res.status(200).json(retailsQuery)
}
