import { prisma } from '../../prisma/prisma'

export default async function handler(req, res) {
    const data = JSON.parse(req.body)

    const userCreated = await prisma.user.create({
        data
    })

    res.json(userCreated)
}

