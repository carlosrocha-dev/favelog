import prisma from "../clientPrisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function GetCourier(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let {id} = req.query
    if (typeof(id) == undefined || typeof(id) == null) {
        id = "1"
    }
    const getCourier = await prisma.courier.findUnique({
        where: {
            courier_id: parseInt(id as string)
        }
    })
    if (getCourier) {
        res.status(200).json(getCourier)
    } else {
        res.status(404).json('not found')
    }
}