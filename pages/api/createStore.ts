// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  email: string,
  cpf: number,
  tel: number,
  pix: string,
  pickupaddress: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dataReceived:Data = req.body
  const {name, email, cpf, tel, pix, pickupaddress} = dataReceived

  if (!name || !email || !cpf || !tel || !pix || !pickupaddress) {
    res.status(404).json({StoreCreated: false})
  }

  res.status(201).json({StoreCreated: true})
}
