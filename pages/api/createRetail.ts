// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from './clientPrisma'

type DataReceived = {
  name: string,
  email: string,
  cpf: string,
  tel: string,
  pix: string,
  pickupaddress: string,
}

export default async function createRetail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataReceived:DataReceived = req.body
  const {name, email, cpf, tel, pix, pickupaddress} = dataReceived

  if (!name || !email || !cpf || !tel || !pix || !pickupaddress) {
    res.status(404).json({StoreCreated: false})
  }

  const emailQuery = await prisma.retail.findUnique({
    where: {
      email: email
    }
  })

  const cpfQuery = await prisma.retail.findUnique({
    where: {
      cpf: parseInt(cpf)
    }
  })

  if (!emailQuery && !cpfQuery){
    const retail = await prisma.retail.create({
      data: {
        name: name,
        email: email,
        cpf: parseInt(cpf),
        tel: parseInt(tel),
        pix: pix,
        pickup_address: pickupaddress
      }
    })
    res.status(201).json(retail)
  } else {
    res.status(403).json({StoreCreated: false})
  }

}
