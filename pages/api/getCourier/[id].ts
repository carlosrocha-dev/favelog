import prisma from "../clientPrisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function GetCourier(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {id} = req.query
    const getCourier = await prisma.courier.findUnique({
        where: {
            courier_id: parseInt(id)
        }
    })
    if (getCourier) {
        res.status(200).json(getCourier)
    } else {
        res.status(404).json('not found')
    }
}