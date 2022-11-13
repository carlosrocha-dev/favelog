// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from './clientPrisma'

type DataReceived = {
  name: string,
  email: string,
  cpf: string,
  tel: string,
  pix: string,
  vehiclePlate: string,
  vehicleModel: string,
}

export default async function createCourier(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataReceived:DataReceived = req.body
  const {name, email, cpf, tel, pix, vehiclePlate, vehicleModel} = dataReceived

  if (!name || !email || !cpf || !tel || !pix || !vehiclePlate || !vehicleModel) {
    res.status(404).json({CourierCreated: false})
  }

  const emailQuery = await prisma.courier.findUnique({
    where: {
      email: email
    }
  })

  const cpfQuery = await prisma.courier.findUnique({
    where: {
      cpf: parseInt(cpf)
    }
  })

  if (!emailQuery && !cpfQuery) {
    const courier = await prisma.courier.create({
      data: {
        name: name,
        email: email,
        cpf: parseInt(cpf),
        tel: parseInt(tel),
        pix: pix,
        vehicle_plate: vehiclePlate,
        vehicle_model: vehicleModel
      }
    })
    res.status(201).json(courier)
  } else {
    res.status(403).json({CourierCreated: false})
  }
}
