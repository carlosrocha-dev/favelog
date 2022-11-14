import type { NextApiRequest, NextApiResponse } from 'next'
import { env } from 'process'

// type Data = {
//   name: string
// }

export default function test(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const test = env.DATABASE_URL
    res.status(200).json(test)
}
