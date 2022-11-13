// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { randomInt } from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from './clientPrisma'

type DataReceived = {
  requestRetail: string,
  pickupAddress: string,
  deliveryAddress: string,
}

async function searchCourier(pickupAddress:string, deliveryAddress:string) {
  const listCouriers = await prisma.courier.findMany()
  let couriersId = []
  listCouriers.forEach(element => {
    couriersId.push(element.courier_id)
  });

  let couriersLen = couriersId.length
  return couriersId[Math.floor(Math.random() * couriersLen)]
}

export default async function createCourier(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataReceived:DataReceived = req.body
  const {requestRetail, pickupAddress, deliveryAddress} = dataReceived

  if (!requestRetail || !pickupAddress || !deliveryAddress) {
    res.status(404).json({DeliveryCreated: false})
  }

  const courierId = await searchCourier(pickupAddress, deliveryAddress)

  const delivery = await prisma.delivery.create({
    data: {
      retail_id: parseInt(requestRetail),
      courier_id: courierId,
      pickup_address: pickupAddress,
      delivery_address: deliveryAddress,
      value_tax: 5,
      delivery_status: 1,
      payment_status: 1,
    }
  })
  res.status(201).json(delivery)
}
