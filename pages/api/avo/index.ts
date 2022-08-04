// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Database from "@database";

import enablePublicAccess from '@cors'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res)

    const db = new Database()
    const allEntries = await db.getAll()
    const lenght = allEntries.length

    // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ lenght, data: allEntries }))
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }

}

