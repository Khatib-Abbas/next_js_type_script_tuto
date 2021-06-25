import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>): any => {
  console.log(req)
  res.status(200).json({ name: 'John Doe' })
}
