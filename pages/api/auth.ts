
import type { NextApiRequest, NextApiResponse} from "next"

export default function handler( 
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { username, password } = req.body

    res.status(200).json({ 
        result: true, 
        message: `Hello ${username}`
    })
}