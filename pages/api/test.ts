import type { NextApiRequest, NextApiResponse } from 'next'

export default function test(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json('its works')
}
